import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')} 
              className="flex items-center gap-3 flex-shrink-0 group hover:opacity-90 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-full blur-sm transform scale-110"></div>
                <img 
                  src={logo} 
                  alt="Nedz Collection" 
                  className="h-12 w-auto relative transform group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              <div className="hidden md:flex md:flex-col">
                <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-500">
                  Nedz Collection
                </span>
                <span className="text-xs uppercase tracking-widest text-purple-600/80 font-medium">
                  Handmade Jewelry
                </span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a 
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-150"
            >
              Home
            </a>
            <a 
              href="#products"
              onClick={(e) => scrollToSection(e, 'products')}
              className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-150"
            >
              Products
            </a>
            <a 
              href="#size-guide"
              onClick={(e) => scrollToSection(e, 'size-guide')}
              className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-150"
            >
              Size Guide
            </a>
            <a 
              href="#reviews"
              onClick={(e) => scrollToSection(e, 'reviews')}
              className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-150"
            >
              Reviews
            </a>
            <a 
              href="#faq"
              onClick={(e) => scrollToSection(e, 'faq')}
              className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-150"
            >
              FAQ
            </a>
            <a 
              href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 px-3 py-2 text-sm font-medium transition duration-150"
            >
              <div className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-40 blur transition-all duration-300"></div>
                  <svg className="relative w-5 h-5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#feda75" />
                        <stop offset="25%" stopColor="#fa7e1e" />
                        <stop offset="50%" stopColor="#d62976" />
                        <stop offset="75%" stopColor="#962fbf" />
                        <stop offset="100%" stopColor="#4f5bd5" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#instagramGradient)"
                      d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"
                    />
                  </svg>
                </div>
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">Follow Us</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-600 hover:text-purple-600 focus:outline-none menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a 
                href="#home"
                onClick={(e) => scrollToSection(e, 'home')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600"
              >
                Home
              </a>
              <a 
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600"
              >
                Products
              </a>
              <a 
                href="#size-guide"
                onClick={(e) => scrollToSection(e, 'size-guide')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600"
              >
                Size Guide
              </a>
              <a 
                href="#reviews"
                onClick={(e) => scrollToSection(e, 'reviews')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600"
              >
                Reviews
              </a>
              <a 
                href="#faq"
                onClick={(e) => scrollToSection(e, 'faq')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600"
              >
                FAQ
              </a>
              <a 
                href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-purple-600 hover:text-purple-700"
              >
                <div className="flex items-center space-x-2 group">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-40 blur transition-all duration-300"></div>
                    <svg className="relative w-5 h-5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="instagramGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#feda75" />
                          <stop offset="25%" stopColor="#fa7e1e" />
                          <stop offset="50%" stopColor="#d62976" />
                          <stop offset="75%" stopColor="#962fbf" />
                          <stop offset="100%" stopColor="#4f5bd5" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#instagramGradientMobile)"
                        d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"
                      />
                    </svg>
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">Follow Us</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar