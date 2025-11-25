import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Victor Ferrold / Mikkel Pedersen - All rights reserved.
        </p>
        <p className="text-gray-400">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;