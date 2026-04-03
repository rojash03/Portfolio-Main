import React from "react";
// import { CiSearch } from "react-icons/ci";
import { Cartdetails } from "../data/cart.js";

function Project({ limit }) {
  const projectList = limit ? Cartdetails.slice(0, limit) : Cartdetails;

  return (
    <>
      <div className="flex flex-wrap p-6 md:p-10 gap-8 md:gap-12 justify-center items-stretch">
        {projectList.map((item) => (
          <div
            key={item.id}
            className="card w-full max-w-sm p-4 text-center shadow-lg border border-gray-100 rounded-xl flex flex-col bg-white relative"
          >
            <img
              className="h-56 md:h-64 w-full mx-auto rounded-md object-cover"
              src={item.image}
              alt={item.projectName}
              loading="lazy"
            />
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
                  <button className="w-full bg-primary text-textColor px-4 py-2 rounded-md hover:bg-secondary transition min-w-[120px]">
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
                  <button className="w-full bg-primary text-textColor px-4 py-2 rounded-md hover:bg-secondary transition min-w-[120px]">
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
        ))}
      </div>
    </>
  );
}

export default Project;
