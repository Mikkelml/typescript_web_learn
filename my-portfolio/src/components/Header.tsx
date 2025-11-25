import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-transparent shadow-md' : 'bg-transparent'
      }`}
    >
 <nav className="container mx-auto px-6 py-4">
  <div className="flex justify-between items-center">

  
    <div className="flex items-center space-x-6">
      <a href="#" className="text-2xl font-bold text-white  hover:text-gray-900 transition-colors">
        Home
      </a>
      <a href="https://open.spotify.com/user/1129617743?si=dde6340b635c40b1" className="text-2xl font-bold text-white  hover:text-gray-900 transition-colors">
        Music
      </a>
    </div>

    <div className="flex items-center space-x-6">
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item)}
              className="text-2xl font-bold text-white hover:text-gray-900 transition-colors"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-amber-100"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

    </div>
  </div>



        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;