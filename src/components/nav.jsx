import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`;


  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="glass-nav w-full px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full overflow-hidden border border-gray-200">
            <Link to="/" onClick={closeMenu}>
              <img src="../logo.jpg" alt="Logo" className="h-full w-full object-cover" />
            </Link>
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight">Rojesh</span>
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
            <button className="px-5 py-2.5 bg-secondary text-primary rounded-xl hover:scale-105 transition-transform">
              Let's Talk
            </button>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary border border-gray-200 bg-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
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

      {/* overlay to catch outside clicks on mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div id="mobile-menu" className={`${isMenuOpen ? "block" : "hidden"} md:hidden w-full mt-3 z-40 relative`}>
        <ul className="flex flex-col w-full gap-y-4 bg-white rounded-lg p-4 ">
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
            <button className="px-4 py-2 bg-secondary text-primary rounded-xl hover:scale-105 transition-transform w-full">
              Let's Talk
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;