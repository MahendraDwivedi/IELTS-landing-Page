import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Trophy, BookOpen, Phone, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features", icon: Trophy },
    { 
      label: "Courses", 
      href: "#courses",
      icon: BookOpen,
      dropdown: [
        { label: "IELTS Academic", href: "#academic" },
        { label: "IELTS General", href: "#general" },
        { label: "Speaking Practice", href: "#speaking" },
        { label: "Writing Masterclass", href: "#writing" },
      ]
    },
    { label: "Testimonials", href: "#testimonials", icon: User },
    { label: "Contact", href: "#contact", icon: Phone },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
            : 'bg-white shadow-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                  IP
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IELTS Pro
              </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label} className="relative group">
                    {link.dropdown ? (
                      <div>
                        <button
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all group"
                          onClick={() => toggleDropdown(link.label)}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{link.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown menu */}
                        <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                          activeDropdown === link.label 
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                        }`}>
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all relative overflow-hidden group"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{link.label}</span>
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-5 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all">
                Login
              </button>
              <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Menu
              </span>
              <button
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile navigation links */}
            <ul className="space-y-2 mb-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    {link.dropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all"
                          onClick={() => toggleDropdown(link.label)}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile dropdown */}
                        <div className={`mt-2 ml-4 space-y-1 overflow-hidden transition-all duration-300 ${
                          activeDropdown === link.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all"
                              onClick={toggleMobileMenu}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all"
                        onClick={toggleMobileMenu}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{link.label}</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA buttons */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <button className="w-full px-5 py-3 text-gray-700 font-medium rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                Login
              </button>
              <button className="w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;