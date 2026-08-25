import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Cartdetails } from "../data/cart";
import usePageMeta from "../hooks/usePageMeta";

function ProjectDetail() {
  const { slug } = useParams();
  const project = Cartdetails.find((item) => item.slug === slug);

  usePageMeta(project ? `/projects/${project.slug}` : "/404");

  if (!project) {
    return (
      <>
        <Nav />
        <main className="min-h-[70vh] bg-textColor pt-28 px-6 text-center">
          <h1 className="display-title text-4xl font-bold text-primary">Project Not Found</h1>
          <p className="mt-4 text-gray-700">This project case study is not available.</p>
          <Link to="/projects" className="inline-block mt-8 bg-primary text-textColor px-6 py-3 rounded-xl">
            Back to Projects
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="bg-ambient pt-24">
        <section className="container mx-auto px-4 md:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="kicker">Case Study</div>
            <h1 className="display-title text-4xl md:text-5xl font-bold text-primary mt-3">
              {project.projectName}
            </h1>
            <p className="text-lg text-gray-700 mt-5 max-w-3xl">{project.description}</p>
            <img
              src={project.image}
              alt={`${project.projectName} web application interface`}
              className="w-full max-h-[28rem] object-cover rounded-xl mt-10 shadow-lg"
              width="960"
              height="540"
              onError={(event) => {
                event.currentTarget.src = "/preview.png";
              }}
            />
          </div>
        </section>

        <section className="bg-textColor py-14">
          <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 max-w-5xl">
            <article className="card-surface rounded-2xl p-6">
              <h2 className="display-title text-2xl font-bold text-primary">Project Overview</h2>
              <p className="text-gray-700 mt-4">{project.description}</p>
            </article>
            <article className="card-surface rounded-2xl p-6">
              <h2 className="display-title text-2xl font-bold text-primary">Rojesh's Role</h2>
              <p className="text-gray-700 mt-4">{project.role}</p>
            </article>
            <article className="card-surface rounded-2xl p-6">
              <h2 className="display-title text-2xl font-bold text-primary">Technologies</h2>
              <ul className="flex flex-wrap gap-3 mt-4">
                {project.technologies.map((tech) => (
                  <li key={tech} className="px-3 py-2 rounded-lg bg-secondary bg-opacity-10 text-primary">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card-surface rounded-2xl p-6">
              <h2 className="display-title text-2xl font-bold text-primary">Key Features</h2>
              <ul className="list-disc pl-5 text-gray-700 mt-4 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-8 py-12 text-center">
          <h2 className="display-title text-3xl font-bold text-primary">Explore More Work</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-secondary text-primary px-6 py-3 rounded-xl font-semibold">
              View Live Project
            </a>
            <Link to="/projects" className="border border-primary text-primary px-6 py-3 rounded-xl font-semibold">
              Back to Projects
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetail;
