import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full Stack Developer | TypeScript Enthusiast | Problem Solver
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          I build modern web applications with clean code and beautiful user experiences.
          Passionate about creating efficient, scalable solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;