import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Courses", href: "#courses" },
    { label: "Success Stories", href: "#testimonials" },
  ];

  const resources = [
    { label: "IELTS Blog", href: "#blog" },
    { label: "Free Resources", href: "#resources" },
    { label: "Mock Tests", href: "#tests" },
    { label: "Study Tips", href: "#tips" },
  ];

  const support = [
    { label: "Help Center", href: "#help" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact Support", href: "#contact" },
    { label: "Refund Policy", href: "#refund" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-500" },
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                IELTS Pro Institute
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering students worldwide to achieve their dream IELTS band scores through expert guidance, innovative tools, and proven strategies.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:contact@ieltspro.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@ieltspro.com</span>
              </a>
              
              <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 9876543210</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 IELTS Pro Institute. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center ${social.color} transition-all transform hover:scale-110 hover:-translate-y-1`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;