import React from "react";
import { Cartdetails } from "../data/cart.js";
import AnimatedSection from "./AnimatedSection";

function Project({ limit }) {
  const projectList = limit ? Cartdetails.slice(0, limit) : Cartdetails;

  return (
    <>
      <div className="flex flex-wrap p-6 md:p-10 gap-8 md:gap-12 justify-center items-stretch stagger-children">
        {projectList.map((item, index) => (
          <AnimatedSection
            key={item.id}
            animation="fade-up"
            delay={index * 120}
            className="w-full max-w-sm"
          >
            <div
              className="card p-4 text-center shadow-lg border border-gray-100 rounded-xl flex flex-col bg-white relative project-card-animated h-full"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  className="h-56 md:h-64 w-full mx-auto object-cover transition-transform duration-500 hover:scale-110"
                  src={item.image}
                  alt={item.projectName}
                  loading="lazy"
                />
              </div>
              <h1 className="text-lg font-bold font-mono mt-2">
                {item.projectName}
              </h1>
              <p className="text-sm font-mono text-secondary">{item.ProjectType}</p>
              <p className="text-sm font-mono text-gray-600 mt-2 min-h-[3rem]">
                {item.description || "Project details will be updated soon."}
              </p>
              <p className="text-xs font-mono text-gray-500 mt-1 min-h-[2.5rem]">
                {item.outcome || "Focused on solving a real user problem with clean implementation."}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                {item.githubUrl ? (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.projectName} source code`}
                    className="flex-1"
                  >
                    <button className="w-full bg-primary text-textColor px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 hover:scale-105 min-w-[120px]">
                      Source Code
                    </button>
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed min-w-[120px]"
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
                    className="flex-1"
                  >
                    <button className="w-full bg-primary text-textColor px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 hover:scale-105 min-w-[120px]">
                      Live Demo
                    </button>
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed min-w-[120px]"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}

export default Project;
