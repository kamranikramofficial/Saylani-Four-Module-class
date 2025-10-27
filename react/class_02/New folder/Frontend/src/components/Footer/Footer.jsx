import React from "react";

const Footer = () => {
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
    }
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Nedz Collection</h3>
            <p className="text-gray-600 text-sm">
              Creating unique, handcrafted accessories that reflect your personal style. Every piece is made with love and care.
            </p>
            <a 
              href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-400 hover:text-purple-600 transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => scrollToSection(e, 'products')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a 
                  href="#size-guide" 
                  onClick={(e) => scrollToSection(e, 'size-guide')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a 
                  href="#reviews" 
                  onClick={(e) => scrollToSection(e, 'reviews')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => scrollToSection(e, 'faq')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Help & Info</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => scrollToSection(e, 'faq')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => scrollToSection(e, 'faq')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a 
                  href="#size-guide" 
                  onClick={(e) => scrollToSection(e, 'size-guide')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => scrollToSection(e, 'faq')}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact & Social</h3>
            <div className="mt-4 space-y-4">
              <p className="text-gray-600 text-sm">
                Follow us on Instagram for new designs, custom creations, and special offers!
              </p>
              <a
                href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent transform transition-transform duration-300 hover:scale-105"
              >
                <svg className="h-5 w-5 transform transition-all duration-300 hover:scale-110 hover:rotate-6" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="25%" stopColor="#fa7e1e" />
                      <stop offset="50%" stopColor="#d62976" />
                      <stop offset="75%" stopColor="#962fbf" />
                      <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instagramGradient)" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
                <span>@{import.meta.env.VITE_INSTAGRAM_USERNAME}</span>
              </a>
              {import.meta.env.VITE_CONTACT_EMAIL && (
                <p className="text-gray-600 text-sm">
                  Email us:{' '}
                  <a
                    href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200"
                  >
                    {import.meta.env.VITE_CONTACT_EMAIL}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Nedz Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
