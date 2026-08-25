import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutme";
import Projects from "./pages/project";
import ProjectDetail from "./pages/projectDetail";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import NotFound from "./pages/notfound";
import ScrollToTop from "./components/scrollToTop";
import { Cartdetails } from "./data/cart";

export const indexableRoutes = [
  "/",
  "/about",
  "/projects",
  ...Cartdetails.map((project) => `/projects/${project.slug}`),
  "/skills",
  "/contact",
];

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
