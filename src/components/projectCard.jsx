import React from "react";
import { Link } from "react-router-dom";
import { Cartdetails } from "../data/cart.js";
import AnimatedSection from "./AnimatedSection";

function Project({ limit }) {
  const projectList = limit ? Cartdetails.slice(0, limit) : Cartdetails;

  return (
    <>
      <section className="flex flex-wrap p-6 md:p-10 gap-8 md:gap-12 justify-center items-stretch stagger-children" aria-label="Project cards">
        {projectList.map((item, index) => (
          <AnimatedSection
            key={item.id}
            animation="fade-up"
            delay={index * 120}
            className="w-full max-w-sm"
          >
            <article
              className="card-surface rounded-2xl flex flex-col h-full overflow-hidden project-card-animated"
            >
              <div className="relative overflow-hidden">
                <img
                  className="h-56 md:h-64 w-full mx-auto object-cover transition-transform duration-500 hover:scale-110"
                  src={item.image}
                  alt={`${item.projectName} ${item.ProjectType} interface`}
                  loading="lazy"
                  width="384"
                  height="256"
                  onError={(event) => {
                    event.currentTarget.src = "/preview.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-primary">
                    {item.projectName}
                  </h2>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-primary">
                    {item.ProjectType}
                  </span>
                </div>
                <p className="text-sm text-gray-700 min-h-[3rem]">
                  {item.description || "Project details will be updated soon."}
                </p>
                <p className="text-xs text-gray-500 min-h-[2.5rem]">
                  {item.outcome || "Focused on solving a real user problem with clean implementation."}
                </p>
                <p className="text-xs text-gray-600">
                  Role: {item.role}. Built with {item.technologies.join(", ")}.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
                <Link
                  to={`/projects/${item.slug}`}
                  className="flex-1 w-full border border-secondary text-primary px-4 py-2 rounded-xl hover:bg-secondary transition-all duration-300 text-center"
                >
                  Case Study
                </Link>
                {item.githubUrl ? (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.projectName} source code`}
                    className="flex-1 w-full border border-primary text-primary px-4 py-2 rounded-xl hover:bg-primary hover:text-textColor transition-all duration-300 text-center"
                  >
                      Source Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-200 text-gray-600 px-4 py-2 rounded-xl cursor-not-allowed min-w-[120px]"
                  >
                    Source Code
                  </button>
                )}

                {item.liveUrl ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live demo of ${item.projectName}`}
                    className="flex-1 w-full bg-secondary text-primary px-4 py-2 rounded-xl hover:scale-105 transition-transform min-w-[120px] text-center"
                  >
                      Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-200 text-gray-600 px-4 py-2 rounded-xl cursor-not-allowed min-w-[120px]"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </section>
    </>
  );
}

export default Project;
