const fs = require("fs");
const path = require("path");

require("@babel/register")({
  extensions: [".js", ".jsx"],
  ignore: [/node_modules/],
  presets: [
    ["@babel/preset-env", { targets: { node: "current" }, modules: "commonjs" }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
});

require.extensions[".css"] = () => null;
require.extensions[".svg"] = () => null;

const React = require("react");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");
const { AppRoutes, indexableRoutes } = require("../src/App.jsx");
const {
  getSeoForPath,
  personJsonLd,
  profilePageJsonLd,
  websiteJsonLd,
} = require("../src/config/seo.js");

const buildDir = path.resolve(__dirname, "../build");
const shellPath = path.join(buildDir, "index.html");
const shell = fs.readFileSync(shellPath, "utf8");

function attrs(attributes) {
  return Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}="${String(value).replace(/"/g, "&quot;")}"`)
    .join(" ");
}

function buildHead(pathname) {
  const seo =
    pathname === "/404"
      ? {
          ...getSeoForPath("/"),
          title: "Page Not Found | Rojesh Thapa Portfolio",
          description:
            "The requested page could not be found on Rojesh Thapa's portfolio.",
          canonical: "https://rojeshthapa.com.np/404",
        }
      : getSeoForPath(pathname);
  const robots = pathname === "/404" ? "noindex, follow" : "index, follow";
  const tags = [
    `<title>${seo.title}</title>`,
    `<meta ${attrs({ name: "description", content: seo.description })}>`,
    `<meta ${attrs({ name: "robots", content: robots })}>`,
    `<meta ${attrs({ name: "author", content: seo.author })}>`,
    `<meta ${attrs({ name: "theme-color", content: seo.themeColor })}>`,
    `<link ${attrs({ rel: "canonical", href: seo.canonical })}>`,
    `<meta ${attrs({ property: "og:type", content: "website" })}>`,
    `<meta ${attrs({ property: "og:site_name", content: seo.siteName })}>`,
    `<meta ${attrs({ property: "og:title", content: seo.title })}>`,
    `<meta ${attrs({ property: "og:description", content: seo.description })}>`,
    `<meta ${attrs({ property: "og:url", content: seo.canonical })}>`,
    `<meta ${attrs({ property: "og:image", content: seo.imageUrl })}>`,
    `<meta ${attrs({ property: "og:image:width", content: seo.imageWidth })}>`,
    `<meta ${attrs({ property: "og:image:height", content: seo.imageHeight })}>`,
    `<meta ${attrs({ property: "og:image:alt", content: seo.imageAlt })}>`,
    `<meta ${attrs({ name: "twitter:card", content: "summary_large_image" })}>`,
    `<meta ${attrs({ name: "twitter:title", content: seo.title })}>`,
    `<meta ${attrs({ name: "twitter:description", content: seo.description })}>`,
    `<meta ${attrs({ name: "twitter:image", content: seo.imageUrl })}>`,
  ];

  if (pathname === "/") {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(personJsonLd)}</script>`,
      `<script type="application/ld+json">${JSON.stringify(websiteJsonLd)}</script>`,
      `<script type="application/ld+json">${JSON.stringify(profilePageJsonLd)}</script>`
    );
  }

  return tags.join("");
}

function replaceHead(html, pathname) {
  const head = buildHead(pathname);
  return html
    .replace(/<title>.*?<\/title>/i, "")
    .replace(/<meta name="description"[^>]*>/i, "")
    .replace(/<meta name="robots"[^>]*>/i, "")
    .replace(/<meta name="author"[^>]*>/i, "")
    .replace(/<meta name="theme-color"[^>]*>/i, "")
    .replace(/<link rel="canonical"[^>]*>/i, "")
    .replace(/<meta property="og:[^>]*>/gi, "")
    .replace(/<meta name="twitter:[^>]*>/gi, "")
    .replace("</head>", `${head}</head>`);
}

function outputPath(route) {
  if (route === "/") return path.join(buildDir, "index.html");
  return path.join(buildDir, route.slice(1), "index.html");
}

for (const route of indexableRoutes) {
  const appHtml = renderToString(
    React.createElement(
      StaticRouter,
      { location: route },
      React.createElement(AppRoutes)
    )
  );

  const html = replaceHead(shell, route).replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  const filePath = outputPath(route);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
  console.log(`Prerendered ${route} -> ${path.relative(buildDir, filePath)}`);
}

const notFoundHtml = renderToString(
  React.createElement(
    StaticRouter,
    { location: "/404" },
    React.createElement(AppRoutes)
  )
);
const notFoundFile = path.join(buildDir, "404.html");
fs.writeFileSync(
  notFoundFile,
  replaceHead(shell, "/404").replace(
    '<div id="root"></div>',
    `<div id="root">${notFoundHtml}</div>`
  )
);
console.log(`Prerendered /404 -> ${path.relative(buildDir, notFoundFile)}`);
