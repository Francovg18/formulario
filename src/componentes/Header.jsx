import React, { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-700 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">BrandLogo</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300 transition">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300 transition">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-300 transition">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="text-white hover:text-gray-300 transition">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-300 transition">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-300 transition">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 transition">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
