import { Cartdetails } from "../data/cart";

export const siteConfig = {
  ownerName: "Rojesh Thapa",
  shortName: "Rojesh",
  siteName: "Rojesh Thapa Portfolio",
  domain: "https://rojeshthapa.com.np",
  title: "Rojesh Thapa | Frontend & Full-Stack Developer Nepal",
  description:
    "Explore Rojesh Thapa's portfolio featuring frontend and full-stack development, React projects, modern web applications, UI/UX work, skills, and experience.",
  author: "Rojesh Thapa",
  themeColor: "#4ECDC4",
  image: "/preview.png",
  imageWidth: "1200",
  imageHeight: "630",
  imageAlt: "Rojesh Thapa portfolio preview",
  email: "thaparojash703@gmail.com",
  phone: "+977 982-6085400",
  location: "Aapgachi, Itahari, Nepal",
  sameAs: [
    "https://github.com/rojash03",
    "https://www.linkedin.com/in/rojash-thapa-b10a192b2/",
    "https://www.facebook.com/rojash.thapa.9",
    "https://www.instagram.com/theyhaterojash/",
  ],
};

export const routeSeo = {
  "/": {
    title: siteConfig.title,
    description: siteConfig.description,
  },
  "/about": {
    title: "About Rojesh Thapa | Frontend & Full-Stack Developer",
    description:
      "Learn about Rojesh Thapa, a computing student and developer from Nepal focused on frontend development, full-stack web apps, UI/UX, and cybersecurity.",
  },
  "/projects": {
    title: "Projects | Rojesh Thapa Portfolio",
    description:
      "Explore web applications by Rojesh Thapa, including BaadFaad, FootStats, Library Management System, Sahayogi Connect, and other React projects.",
  },
  "/skills": {
    title: "Skills | Rojesh Thapa",
    description:
      "Review Rojesh Thapa's technical skills across React, Node.js, JavaScript, Python, Java, SQL, Tailwind CSS, databases, and developer tools.",
  },
  "/contact": {
    title: "Contact Rojesh Thapa | Developer Portfolio",
    description:
      "Contact Rojesh Thapa for web development collaboration, project opportunities, and frontend or full-stack development work.",
  },
  "/404": {
    title: "Page Not Found | Rojesh Thapa Portfolio",
    description:
      "The requested page could not be found on Rojesh Thapa's portfolio.",
  },
};

export const getAbsoluteUrl = (path = "/") => {
  if (path.startsWith("http")) return path;
  return `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
};

export const getSeoForPath = (path = "/") => {
  if (path.startsWith("/projects/")) {
    const slug = path.replace("/projects/", "");
    const project = Cartdetails.find((item) => item.slug === slug);

    if (project) {
      return {
        ...siteConfig,
        title: `${project.projectName} Case Study | Rojesh Thapa`,
        description: `${project.projectName} is ${project.description.charAt(0).toLowerCase()}${project.description.slice(1)}`,
        canonical: getAbsoluteUrl(path),
        imageUrl: getAbsoluteUrl(project.image),
      };
    }
  }

  const cleanPath = routeSeo[path] ? path : "/";
  return {
    ...siteConfig,
    ...routeSeo[cleanPath],
    canonical: getAbsoluteUrl(cleanPath),
    imageUrl: getAbsoluteUrl(siteConfig.image),
  };
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.domain}/#person`,
  name: siteConfig.ownerName,
  url: siteConfig.domain,
  image: getAbsoluteUrl("/profile1.png"),
  jobTitle: "Frontend Developer and UI/UX-Focused Full-Stack Developer",
  description:
    "Rojesh Thapa is a Nepal-based frontend and full-stack focused developer building responsive React applications with attention to UI/UX, cybersecurity, and practical software engineering.",
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Itahari",
    addressCountry: "NP",
  },
  sameAs: siteConfig.sameAs,
  knowsAbout: [
    "React",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Frontend Development",
    "Full Stack Development",
    "UI/UX Design",
    "Cybersecurity",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.domain}/#website`,
  name: siteConfig.siteName,
  url: siteConfig.domain,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.domain}/#person`,
  },
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.domain}/#profilepage`,
  url: siteConfig.domain,
  name: siteConfig.title,
  description: siteConfig.description,
  mainEntity: {
    "@id": `${siteConfig.domain}/#person`,
  },
};
