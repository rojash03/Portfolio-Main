import React from "react";
import Nav from "../components/nav";
import Project from "../components/projectCard";
import Footer from "../components/footer";
function ProjectPage() {
  return (
    <>
      <Nav />
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-primary mb-4">Project Portfolio</h1>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>
      <Project />
      <Footer />
    </>
  );
}
export default ProjectPage;
