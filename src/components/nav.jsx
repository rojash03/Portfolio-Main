import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full p-4 shadow-md bg-white">
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12">
          <Link to="/">
            <img src="../logo.jpg" alt="Logo" className="h-full w-full object-cover" />
          </Link>
        </div>
        <span className="font-bold text-lg">Rojash</span>
      </div>

      <div className="flex w-full md:w-auto mt-2 md:mt-0">
        <ul className="flex flex-col md:flex-row w-full md:w-auto gap-y-2 md:gap-y-0 md:gap-x-10">
          <li>
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-primary">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-600 hover:text-primary">Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="text-gray-600 hover:text-primary">Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-auto mt-2 md:mt-0">
        <Link to="/contact">
          <button className="px-4 py-2 bg-primary text-textColor rounded-md hover:bg-secondary w-full md:w-auto">
            Hire Me
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;