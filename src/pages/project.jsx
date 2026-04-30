import React from "react";
import Nav from "../components/nav";
import Project from "../components/projectCard";
import Footer from "../components/footer";
import usePageMeta from "../hooks/usePageMeta";
import AnimatedSection from "../components/AnimatedSection";

function ProjectPage() {
  usePageMeta(
    "Projects | Rojesh Portfolio",
    "Explore featured and full-stack projects built by Rojesh Thapa."
  );

  return (
    <>
      <Nav />
      <div className="text-center pt-24 pb-16 bg-ambient">
        <AnimatedSection animation="fade-down">
          <div className="kicker">Projects</div>
          <h1 className="display-title text-5xl font-bold text-primary mb-4">Project Portfolio</h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </AnimatedSection>
      </div>
      <Project />
      <Footer />
    </>
  );
}
export default ProjectPage;
