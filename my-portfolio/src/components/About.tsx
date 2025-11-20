import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate full-stack developer with expertise in building modern web applications.
              With a strong foundation in TypeScript, React, and Node.js, I create efficient and
              scalable solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My journey in web development started 5 years ago, and since then, I've worked on
              diverse projects ranging from e-commerce platforms to real-time collaboration tools.
              I'm constantly learning and staying updated with the latest technologies and best practices.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me contributing to open-source projects, writing
              technical articles, or exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;