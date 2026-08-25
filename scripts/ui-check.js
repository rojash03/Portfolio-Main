const { spawn } = require("child_process");
const path = require("path");
const { chromium } = require("@playwright/test");

const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/baadfaad",
  "/projects/footstats",
  "/skills",
  "/contact",
  "/missing-page",
];
const widths = [375, 430, 768, 1024, 1280, 1440];
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

function waitForServer(url, attempts = 40) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const check = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) return resolve();
      } catch {}

      count += 1;
      if (count >= attempts) return reject(new Error(`Server did not start at ${url}`));
      setTimeout(check, 500);
    };
    check();
  });
}

(async () => {
  const serveBin = require.resolve("serve/build/main.js");
  const server = spawn(process.execPath, [serveBin, "build", "-l", String(port)], {
    cwd: path.resolve(__dirname, ".."),
    stdio: "ignore",
    shell: false,
  });

  const issues = [];

  try {
    await waitForServer(baseUrl);
    const browser = await chromium.launch({ headless: true });

    for (const width of widths) {
      for (const route of routes) {
        const page = await browser.newPage({ viewport: { width, height: 900 } });
        const browserIssues = [];

        page.on("console", (message) => {
          const text = message.text();
          if (
            ["error", "warning"].includes(message.type()) &&
            !text.includes("Download the React DevTools") &&
            !(route === "/missing-page" && text.includes("404 (Not Found)"))
          ) {
            browserIssues.push(`${message.type()}: ${text}`);
          }
        });
        page.on("pageerror", (error) => browserIssues.push(`pageerror: ${error.message}`));

        await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 15000 });
        await page.waitForTimeout(750);

        const result = await page.evaluate(() => {
          const images = [...document.images].map((image) => ({
            src: image.currentSrc || image.src,
            alt: image.getAttribute("alt"),
            complete: image.complete,
            naturalWidth: image.naturalWidth,
          }));

          return {
            title: document.title,
            h1Count: document.querySelectorAll("h1").length,
            scrollWidth: document.documentElement.scrollWidth,
            clientWidth: document.documentElement.clientWidth,
            brokenImages: images.filter((image) => !image.complete || image.naturalWidth === 0),
            missingAltImages: images.filter((image) => image.alt === null),
          };
        });

        if (!result.title) issues.push(`${width}px ${route}: missing document title`);
        if (result.h1Count !== 1) issues.push(`${width}px ${route}: expected one H1, found ${result.h1Count}`);
        if (result.scrollWidth > result.clientWidth + 1) {
          issues.push(`${width}px ${route}: horizontal overflow ${result.scrollWidth}/${result.clientWidth}`);
        }
        for (const image of result.brokenImages) issues.push(`${width}px ${route}: broken image ${image.src}`);
        for (const image of result.missingAltImages) issues.push(`${width}px ${route}: missing alt ${image.src}`);
        for (const issue of browserIssues) issues.push(`${width}px ${route}: ${issue}`);

        await page.close();
      }
    }

    await browser.close();
  } finally {
    server.kill();
  }

  if (issues.length) {
    console.error(issues.join("\n"));
    process.exit(1);
  }

  console.log(
    `UI check passed for routes ${routes.join(", ")} at widths ${widths.join(", ")}.`
  );
})();
