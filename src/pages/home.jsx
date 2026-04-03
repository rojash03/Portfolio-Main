import React from "react";
import Nav from "../components/nav";
import Project from "../components/projectCard";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Cartdetails } from "../data/cart";
import usePageMeta from "../hooks/usePageMeta";

function Home() {
  usePageMeta(
    "Rojesh | Portfolio",
    "Portfolio of Rojesh Thapa featuring projects, technical skills, and contact information."
  );

  return (
    <>
      <Nav />
      <div className="min-h-screen ">
        <div className="flex w-full items-center justify-center px-4 md:px-8 lg:px-20 py-8 md:py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <div className="flex flex-col gap-y-4 md:gap-y-6">
                <div className="text-primary text-base md:text-lg font-medium tracking-wide">
                  Welcome to my portfolio
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
                  Hello, I am <span className="text-secondary">Rojesh</span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                  A Passionate <span className="text-secondary">IT Student</span> &amp;
                  Aspiring
                  <span className="text-secondary"> Developer</span>
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Passionate about learning new technologies and building creative
                  solutions that make a difference in the digital world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 justify-center lg:justify-start">
                  <a
                    href="/Rojesh_Thapa_CV.pdf"
                    download
                    className="px-6 md:px-8 py-3 bg-secondary rounded-lg text-textColor font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                  >
                    Download CV
                  </a>
                  <Link to="/contact">
                    <button className="px-6 md:px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-medium hover:bg-secondary hover:text-textColor transition-all duration-300">
                      Get In Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary opacity-20 blur-3xl rounded-full"></div>
                <img
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl relative z-10 border-4 border-secondary"
                  src="../profile1.png"
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Check out some of my recent work and projects that showcase my
              skills and creativity
            </p>
          </div>
          <Project limit={3} />
          <div className="flex justify-center items-center mt-8 md:mt-12">
            <Link to="/projects">
              <button className="group flex items-center bg-primary text-textColor px-6 md:px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-secondary hover:scale-105 shadow-lg">
                View More Projects
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="bg-textColor bg-opacity-10 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-opacity-20 transition-all duration-300">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">1.5 yr</h1>
              <p className="text-textColor text-base md:text-lg font-medium">
                Years of Learning
              </p>
              <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="bg-textColor bg-opacity-10 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-opacity-20 transition-all duration-300">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">100%</h1>
              <p className="text-textColor text-base md:text-lg font-medium">
                Coursework Completed
              </p>
              <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="bg-textColor bg-opacity-10 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-opacity-20 transition-all duration-300">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">{Cartdetails.length}+</h1>
              <p className="text-textColor text-base md:text-lg font-medium">
                Projects Completed
              </p>
              <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-b from-gray-50 to-textColor py-20">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              I'm a dedicated IT student with a passion for learning new tools
              and technologies. My journey started with curiosity about how
              computers work and evolved into a deep interest in protecting
              digital infrastructure and creating innovative solutions.
            </p>
            <Link to="/about">
              <button className="group bg-secondary text-textColor px-8 py-4 rounded-lg font-medium text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
                Learn More About Me
                <svg
                  className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
