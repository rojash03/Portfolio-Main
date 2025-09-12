import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { timeline, Hobbies, interests } from "../data/cart.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  const [selectedTab, setSelectedTab] = useState("journey");

  return (
    <>
      <div>
        <Nav />
      </div>
      
      {/* Hero Section */}
      <div className="bg-textColor py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">About Me</h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-[30rem] px-4 md:px-8 lg:px-40 items-center py-8 lg:py-0">
        <div className="w-full lg:w-2/5 flex items-center justify-center mb-8 lg:mb-0">
          <img src="../profile1.png" alt="Profile" className="object-cover h-64 md:h-80 lg:h-full w-full max-w-md lg:max-w-none rounded-xl" />
        </div>
        <div className="w-full lg:w-[60%] lg:ml-12 text-justify h-full flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">My Story</h1>
          <p>
            I’m Rojesh Thapa, a committed BIT student at Itahari International
            College (IIC), pursuing a degree B.Sc. (Hons) Computing program,
            affiliated with London Metropolitan University (UK).
          </p>
          <p className="mt-4">
            I built a strong foundation in core computing concepts including
            logic and problem solving, HTML & CSS, Java, Python, and CHASA
            (Computer Hardware and Software Architecture). These subjects have
            helped me develop critical thinking, understand how systems
            function, and start building real applications.
          </p>
          <p className="mt-4">
            I built a strong foundation in core computing concepts including
            logic and problem solving, HTML & CSS, Java, Python, and CHASA
            (Computer Hardware and Software Architecture). These subjects have
            helped me develop critical thinking, understand how systems
            function, and start building real applications.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 flex flex-wrap justify-center gap-8 p-8">
        <div className="flex-1 min-w-[280px] max-w-xs flex flex-col">
          <div className="bg-textColor flex-1 flex flex-col p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200">
            <div className="text-center flex-1 flex flex-col">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold">Bsc(Hons) Computing</p>
                <p>Itahari International College</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[280px] max-w-xs flex flex-col">
          <div className="bg-textColor flex-1 flex flex-col p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200">
            <div className="text-center flex-1 flex flex-col">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Interests</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Ethical Hacking
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Web Development
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Mobile App Development
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  UI/UX Design
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[280px] max-w-xs flex flex-col">
          <div className="bg-textColor flex-1 flex flex-col p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200">
            <div className="text-center flex-1 flex flex-col">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Goals</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Become a Full Stack Developer
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Open Source Projects
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Learn Cloud Computing
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Research Publication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-textColor py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-primary mb-4">Explore My Journey</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 p-2 bg-gray-100 rounded-2xl border border-gray-200">
              {["journey", "interests", "hobbies"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-8 py-3 rounded-xl transition-all duration-300 text-sm font-semibold capitalize ${
                    selectedTab === tab
                      ? "bg-secondary text-textColor shadow-lg scale-105"
                      : "text-gray-600 hover:text-primary hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {selectedTab === "journey" && (
              <div className="animate-fadeIn">
                <h3 className="text-center text-4xl font-bold mb-8 text-secondary">
                  Academic Journey
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {timeline.map((item) => (
                    <div
                      key={item.id}
                      className="bg-textColor p-8 rounded-xl border border-gray-200 hover:border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full"
                    >
                      <div className="text-center flex-1 flex flex-col">
                        <div className="w-16 h-16 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-secondary">{item.year}</span>
                        </div>
                        <p>{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "interests" && (
              <div className="animate-fadeIn">
                <h3 className="text-center text-4xl font-bold mb-8 text-secondary">
                  My Interests
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {interests.map((interest) => (
                    <div
                      key={interest.id}
                      className="bg-textColor p-8 rounded-xl border border-gray-200 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full"
                    >
                      <div className="text-center flex-1 flex flex-col">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-purple-600 mb-3">{interest.interest}</h4>
                        <p className="text-gray-700 leading-relaxed">{interest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "hobbies" && (
              <div className="animate-fadeIn">
                <h3 className="text-center text-4xl font-bold mb-8 text-secondary">
                  Personal Hobbies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {Hobbies.map((hobby) => (
                    <div
                      key={hobby.id}
                      className="bg-textColor p-8 rounded-xl border border-gray-200 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full"
                    >
                      <div className="text-center flex-1 flex flex-col">
                        <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
                          {hobby.icon}
                        </div>
                        <h4 className="text-lg font-bold text-pink-600">{hobby.hobby}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-secondary opacity-80 py-4">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold">Let's Connect!</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl font-serif mb-8 leading-relaxed">
              Interested in collaborating on tech projects or just want to chat
              about development, design, or the latest in tech? I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className=" bg-primary text-textColor font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="flex items-center">
                    Get in Touch
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link to="/projects">
                <button className=" bg-primary text-textColor font-bold py-4 px-8 rounded-lg  transition-all duration-300 hover:scale-105">
                  <span className="flex items-center">
                    View My Work
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutMe;
