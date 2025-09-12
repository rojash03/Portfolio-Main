import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { skillCategories } from "../data/cart";

function Skills() {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <div className="bg-textColor py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-primary mb-4">Technical Skills</h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and continuous learning journey
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-textColor p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 text-sm bg-secondary bg-opacity-10 text-primary border border-secondary border-opacity-30 rounded-lg font-medium hover:bg-secondary hover: transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> 
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-textColor py-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Certifications & Learning Goals</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">LinkedIn Learning: Java OOP</h3>
              <p className="text-gray-600 mb-4">Object-Oriented Programming Fundamentals</p>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Completed
              </span>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">React & MERN Stack</h3>
              <p className="text-gray-600 mb-4">Full-Stack Web Development</p>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Learning
              </span>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Web Design with Tailwind CSS</h3>
              <p className="text-gray-600 mb-4">Responsive UI/UX Design</p>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                In Progress
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-secondary opacity-80 p-4">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl font-serif mb-8">
              Ready to collaborate on your next project? Let's discuss how my skills can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-textColor font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                View My Projects
              </button>
              <button className="bg-primary text-textColor font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Skills;
