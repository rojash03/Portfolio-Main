import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import usePageMeta from "../hooks/usePageMeta";

function NotFound() {
  usePageMeta(
    "404 | Rojesh Portfolio",
    "The page you are trying to access was not found."
  );

  return (
    <>
      <Nav />
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-textColor">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl md:text-7xl font-bold text-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-4">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link to="/" className="inline-block">
              <button className="px-6 py-3 bg-primary text-textColor rounded-md hover:bg-secondary transition-colors w-full">
                Back to Home
              </button>
            </Link>
            <Link to="/projects" className="inline-block">
              <button className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-gray-100 transition-colors w-full">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
