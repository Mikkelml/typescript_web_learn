//import React from 'react';
//import Header from './components/Header';
//import Hero from './components/Hero';
//import About from './components/About';
//import Projects from './components/Projects';
//import Skills from './components/Skills';
//import Contact from './components/Contact';
//import Footer from './components/Footer';
//
//const App: React.FC = () => {
//  return (
//    <div className="min-h-screen">
//      <Header />
//      <Hero />
//      <About />
//      <Projects />
//      <Skills />
//      <Contact />
//      <Footer />
//    </div>
//  );
//};



import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🎉 Tailwind CSS is Working!
        </h1>
        <p className="text-gray-600">
          If you see colors and styling, we're good to go!
        </p>
      </div>
    </div>
  );
};

export default App;
