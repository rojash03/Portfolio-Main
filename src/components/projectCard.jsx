import React from "react";
// import { CiSearch } from "react-icons/ci";
import { Cartdetails } from "../data/cart.js";

function Project({ limit }) {
  const projectList = limit ? Cartdetails.slice(0, limit) : Cartdetails;
  return (
    <>
      <div className="flex flex-wrap p-10 gap-20 justify-center items-center">
        {projectList.map((item) => (
          <div
            key={item.id}
            className="card p-4 text-center shadow-lg flex flex-col relative"
          >
            <img
              className="h-80 w-72 mx-auto rounded-md"
              src={item.image}
              alt={item.projectName}
            />
            <h1 className="text-lg font-bold font-mono mt-2">
              {item.projectName}
            </h1>
            <p className="text-sm font-mono">{item.ProjectType}</p>
            <p className="text-xs font-mono text-gray-500 mt-2"></p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://github.com/rojash03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary text-textColor px-4 py-2 rounded-md hover:bg-secondary transition flex-1 min-w-[120px]">
                  View Details
                </button>
              </a>
              <a
                href="https://github.com/rojash03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary text-textColor px-4 py-2 rounded-md hover:bg-secondary transition flex-1 min-w-[120px]">
                  Visit Site
                </button>
              </a>
            </div>
            {item.tags && (
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx} 
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
