# Rojesh Thapa Portfolio

Professional portfolio website for Rojesh Thapa, a Nepal-based computing student and frontend/full-stack focused developer interested in responsive web applications, UI/UX, cybersecurity, and practical software engineering.

## About

This project showcases Rojesh Thapa's profile, projects, technical skills, academic journey, and contact information. The site is built as a React single-page application with route-based pages for Home, About, Projects, Skills, Contact, and a custom 404 view.

## Features

- Responsive portfolio UI with fixed navigation and mobile menu
- Project cards with descriptions, outcomes, source links, and live demo links
- About page with education, interests, hobbies, and academic timeline
- Skills page grouped by programming languages, web technologies, databases, and tools
- Contact form with validation, honeypot spam check, and Formspree submission
- Route-aware document titles, meta descriptions, canonical URLs, Open Graph, and Twitter card metadata
- Schema.org JSON-LD for `Person`, `WebSite`, and `ProfilePage`
- `robots.txt` and `sitemap.xml` for search engine discovery

## Featured Projects

- **Watch Ecommerce Site**: E-commerce storefront focused on product browsing, cart, and checkout flows.
- **Library Management System**: Web and mobile application for books, borrowing records, due dates, and users.
- **BaadFaad**: Progressive web app designed for fast loading, installability, and offline-ready access.
- **FootStats**: Football statistics dashboard for teams, trends, and match performance insights.
- **ShikshaSathi**: Educational platform for student and teacher collaboration.
- **Sahayogi Connect**: Community platform connecting volunteers with local organizations and causes.

## Tech Stack

- React 19
- React Router 7
- JavaScript
- Tailwind CSS
- React Icons
- Create React App / react-scripts
- Formspree contact endpoint

## Project Structure

```text
public/
  index.html
  robots.txt
  sitemap.xml
  preview.png
  profile1.png
  project assets
src/
  components/
  config/
  data/
  hooks/
  pages/
```

## Routes

- `/` - Homepage and featured projects
- `/about` - Profile, education, interests, goals, and journey
- `/projects` - Full project portfolio
- `/skills` - Technical skills and learning goals
- `/contact` - Contact form and public contact details
- `*` - Custom not found page

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Build and prerender production HTML:

```bash
npm run build
```

## Available Scripts

- `npm start` / `npm run dev` - Run the local development server
- `npm run build` - Create an optimized CRA production build and prerender public routes into `build/`
- `npm run build:cra` - Run only the CRA production build
- `npm run prerender` - Render route-specific static HTML after a CRA build
- `npm run prerender:check` - Validate generated route HTML for SEO tags and body content
- `npm run ui:check` - Build, prerender, serve the production output, and run responsive Playwright checks
- `npm test` - Run the React test runner
- `npm run eject` - Eject CRA configuration

## SEO

SEO settings are centralized in `src/config/seo.js`.

The production domain is:

```text
https://rojeshthapa.com.np
```

The production sitemap URL is:

```text
https://rojeshthapa.com.np/sitemap.xml
```

Indexable routes have unique titles, descriptions, canonical URLs, Open Graph metadata, and Twitter card metadata. The homepage includes structured data for Rojesh Thapa as a `Person`, the portfolio as a `WebSite`, and the homepage as a `ProfilePage`.

## Prerendering

Build-time prerendering is handled by `scripts/prerender.js`. It reuses the same React route components through `StaticRouter` and writes static HTML for:

- `build/index.html`
- `build/about/index.html`
- `build/projects/index.html`
- `build/skills/index.html`
- `build/contact/index.html`
- `build/404.html`

Run `npm run prerender:check` after a build to confirm each generated file contains essential SEO metadata and meaningful body content before JavaScript executes.

## Regression Testing

Playwright is installed as a development dependency for UI regression checks. Run:

```bash
npm run ui:check
```

The check serves the production `build/` directory and tests `/`, `/about`, `/projects`, `/skills`, `/contact`, and an unknown route at 375, 430, 768, 1024, 1280, and 1440 pixels. It checks for console/page errors, hydration errors, horizontal overflow, missing H1s, missing alt attributes, and broken images.

## Performance

The site uses optimized production bundling through react-scripts, local portfolio assets where available, explicit image dimensions for key images, lazy loading for below-the-fold project images, and lightweight route-level content.

## Deployment

The repository includes `public/_redirects` for static hosting providers such as Netlify:

```text
/*    /404.html   404
```

The prerendered route folders should be served directly by the host. Unknown URLs should fall through to `404.html` with a 404 status where supported. After deployment, verify direct visits to all public routes, `/robots.txt`, and `/sitemap.xml`.

## Contact

- Email: thaparojash703@gmail.com
- Location: Aapgachi, Itahari, Nepal
- GitHub: https://github.com/rojash03
- LinkedIn: https://www.linkedin.com/in/rojash-thapa-b10a192b2/
- Facebook: https://www.facebook.com/rojash.thapa.9
- Instagram: https://www.instagram.com/theyhaterojash/

## License

No license file is currently included. Add a license before distributing or reusing this project publicly.
