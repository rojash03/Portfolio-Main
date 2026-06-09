import React from "react";
import Nav from "../components/nav";
import Project from "../components/projectCard";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Cartdetails } from "../data/cart";
import usePageMeta from "../hooks/usePageMeta";
import AnimatedSection from "../components/AnimatedSection";

function Home() {
  usePageMeta(
    "Rojesh | Portfolio",
    "Portfolio of Rojesh Thapa featuring projects, technical skills, and contact information."
  );

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-ambient pt-24">
        <div className="flex w-full items-center justify-center px-4 md:px-8 lg:px-20 py-12 md:py-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <AnimatedSection animation="fade-left" className="flex-1 max-w-2xl text-center lg:text-left">
              <div className="flex flex-col gap-y-4 md:gap-y-6">
                <div className="kicker">Portfolio</div>
                <h1 className="display-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                  I build calm, high-impact experiences.
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I am <span className="text-secondary font-semibold">Rojesh</span>, an IT student and aspiring developer
                  focused on clean UX, performance, and secure systems.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  I craft modern web products that feel intuitive, fast, and purpose-driven.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 justify-center lg:justify-start">
                  <a
                    href="/Rojesh Thapa CV.pdf"
                    download
                    className="px-6 md:px-8 py-3 bg-secondary text-primary rounded-xl font-medium hover:scale-105 transition-transform shadow-lg text-center"
                  >
                    Download CV
                  </a>
                  <Link to="/contact">
                    <button className="px-6 md:px-8 py-3 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-textColor transition-all duration-300">
                      Get In Touch
                    </button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative animate-float">
                <div className="absolute -inset-6 bg-secondary opacity-20 blur-3xl rounded-full"></div>
                <img
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-[2.5rem] shadow-2xl relative z-10 border border-gray-200"
                  src="../profile1.png"
                  alt="profile"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="bg-textColor py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-8 md:mb-12">
            <h2 className="display-title text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Check out some of my recent work and projects that showcase my
              skills and creativity
            </p>
          </AnimatedSection>
          <Project limit={3} />
          <AnimatedSection animation="fade-up" className="flex justify-center items-center mt-8 md:mt-12">
            <Link to="/projects">
              <button className="group flex items-center bg-primary text-textColor px-6 md:px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg">
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
          </AnimatedSection>
        </div>
      </div>
      <div className="bg-ambient py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <AnimatedSection animation="scale-up" delay={0}>
              <div className="card-surface rounded-2xl p-6 md:p-8 hover:scale-105 transition-transform">
                <h1 className="display-title text-4xl md:text-5xl font-bold text-primary mb-2">1.5 yr</h1>
                <p className="text-gray-700 text-base md:text-lg font-medium">
                  Years of Learning
                </p>
                <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale-up" delay={150}>
              <div className="card-surface rounded-2xl p-6 md:p-8 hover:scale-105 transition-transform">
                <h1 className="display-title text-4xl md:text-5xl font-bold text-primary mb-2">100%</h1>
                <p className="text-gray-700 text-base md:text-lg font-medium">
                  Coursework Completed
                </p>
                <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale-up" delay={300}>
              <div className="card-surface rounded-2xl p-6 md:p-8 hover:scale-105 transition-transform">
                <h1 className="display-title text-4xl md:text-5xl font-bold text-primary mb-2">{Cartdetails.length}+</h1>
                <p className="text-gray-700 text-base md:text-lg font-medium">
                  Projects Completed
                </p>
                <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-textColor py-20">
        <div className="container mx-auto px-8 text-center">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
            <h2 className="display-title text-5xl font-bold text-primary mb-6">About Me</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              I'm a dedicated IT student with a passion for learning new tools
              and technologies. My journey started with curiosity about how
              computers work and evolved into a deep interest in protecting
              digital infrastructure and creating innovative solutions.
            </p>
            <Link to="/about">
              <button className="group bg-secondary text-primary px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-transform shadow-lg">
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
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
