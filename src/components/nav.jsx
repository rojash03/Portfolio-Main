import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-primary font-semibold" : "text-gray-600 hover:text-primary"}`;

  return (
    <nav className="w-full p-4 shadow-md bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12">
            <Link to="/" onClick={closeMenu}>
              <img src="../logo.jpg" alt="Logo" className="h-full w-full object-cover" />
            </Link>
          </div>
          <span className="font-bold text-lg">Rojesh</span>
        </div>

        <ul className="hidden md:flex items-center gap-x-10">
          <li>
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={navLinkClass} onClick={closeMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link to="/contact" onClick={closeMenu}>
            <button className="px-4 py-2 bg-primary text-textColor rounded-md hover:bg-secondary">
              Hire Me
            </button>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary border border-gray-200"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden w-full mt-3`}>
        <ul className="flex flex-col w-full gap-y-2">
          <li>
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={navLinkClass} onClick={closeMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="w-full mt-3">
          <Link to="/contact" onClick={closeMenu}>
            <button className="px-4 py-2 bg-primary text-textColor rounded-md hover:bg-secondary w-full">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;