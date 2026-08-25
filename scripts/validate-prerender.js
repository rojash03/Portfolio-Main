const fs = require("fs");

const routes = {
  "/": "build/index.html",
  "/about": "build/about/index.html",
  "/projects": "build/projects/index.html",
  "/projects/watch-ecommerce-site": "build/projects/watch-ecommerce-site/index.html",
  "/projects/library-management-system": "build/projects/library-management-system/index.html",
  "/projects/baadfaad": "build/projects/baadfaad/index.html",
  "/projects/footstats": "build/projects/footstats/index.html",
  "/projects/shikshasathi": "build/projects/shikshasathi/index.html",
  "/projects/sahayogi-connect": "build/projects/sahayogi-connect/index.html",
  "/skills": "build/skills/index.html",
  "/contact": "build/contact/index.html",
  "/404": "build/404.html",
};

let failed = false;

for (const [route, file] of Object.entries(routes)) {
  const html = fs.readFileSync(file, "utf8");
  const checks = {
    title: /<title>[^<]+<\/title>/.test(html),
    description: /<meta name="description" content="[^"]+"/.test(html),
    canonical: /<link rel="canonical" href="[^"]+"/.test(html),
    ogTitle: /<meta property="og:title" content="[^"]+"/.test(html),
    ogDescription: /<meta property="og:description" content="[^"]+"/.test(html),
    ogUrl: /<meta property="og:url" content="[^"]+"/.test(html),
    twitter: /<meta name="twitter:card" content="summary_large_image"/.test(html),
    h1: /<h1[\s>]/.test(html),
    content: /(Rojesh Thapa|Project Portfolio|Technical Skills|Contact Details|About Me|Page Not Found|Case Study|Project Overview)/.test(html),
    jsonLd: route === "/" ? /<script type="application\/ld\+json">/.test(html) : true,
    hydratedRoot: /<div id="root">.+<\/div>/.test(html),
  };

  console.log(route, checks);

  if (Object.values(checks).includes(false)) {
    failed = true;
  }
}

if (failed) process.exit(1);
