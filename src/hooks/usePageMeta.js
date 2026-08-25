import { useEffect } from "react";
import { getSeoForPath, personJsonLd, profilePageJsonLd, websiteJsonLd } from "../config/seo";

const setMeta = (selector, attribute, value) => {
  let element = document.querySelector(selector);
  const isProperty = selector.includes("property=");
  const nameMatch = selector.match(/\[(?:name|property)="([^"]+)"\]/);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(isProperty ? "property" : "name", nameMatch?.[1] || "");
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const setLink = (rel, href) => {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const setJsonLd = (id, data) => {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

function usePageMeta(path = "/") {
  useEffect(() => {
    const seo = getSeoForPath(path);

    document.title = seo.title;

    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[name="robots"]', "content", path === "/404" ? "noindex, follow" : "index, follow");
    setMeta('meta[name="author"]', "content", seo.author);
    setMeta('meta[name="theme-color"]', "content", seo.themeColor);
    setLink("canonical", seo.canonical);

    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", seo.siteName);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[property="og:url"]', "content", seo.canonical);
    setMeta('meta[property="og:image"]', "content", seo.imageUrl);
    setMeta('meta[property="og:image:width"]', "content", seo.imageWidth);
    setMeta('meta[property="og:image:height"]', "content", seo.imageHeight);
    setMeta('meta[property="og:image:alt"]', "content", seo.imageAlt);

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
    setMeta('meta[name="twitter:image"]', "content", seo.imageUrl);

    if (path === "/") {
      setJsonLd("person-jsonld", personJsonLd);
      setJsonLd("website-jsonld", websiteJsonLd);
      setJsonLd("profilepage-jsonld", profilePageJsonLd);
    }
  }, [path]);
}

export default usePageMeta;
