import React from "react";
import Nav from "../components/nav";
import Project from "../components/projectCard";
import Footer from "../components/footer";
import usePageMeta from "../hooks/usePageMeta";
import AnimatedSection from "../components/AnimatedSection";

function ProjectPage() {
  usePageMeta("/projects");

  return (
    <>
      <Nav />
      <main>
      <section className="text-center pt-24 pb-16 bg-ambient">
        <AnimatedSection animation="fade-down">
          <div className="kicker">Projects</div>
          <h1 className="display-title text-4xl md:text-5xl font-bold text-primary mb-4">Project Portfolio</h1>
          <p className="text-gray-700 max-w-2xl mx-auto px-4">
            Web applications and product ideas built around usability, responsive interfaces, and practical problem solving.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </AnimatedSection>
      </section>
      <Project />
      </main>
      <Footer />
    </>
  );
}
export default ProjectPage;
