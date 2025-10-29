'use client';

import { useState } from 'react';
import Link from "next/link";
import { FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaYoutube, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section - Let's Connect */}
      <div className="bg-gray-900 rounded-t-2xl md:rounded-t-3xl">
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let&apos;s Connect there
            </h2>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group"
            >
              Hire me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                CH
              </div>
              <span className="text-xl font-bold text-white">Chisom.dev</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer & Business Strategy Consultant. Building digital experiences and transforming ideas into reality.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://wa.me/2347083089127"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.instagram.com/11declan?igsh=bHN3dGxrMW5oYmE0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://x.com/11declan_?s=21&t=UOzvhZvwZuAe5hZuC1YiyQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/Declanny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="tel:+2347083089127" className="hover:text-white transition-colors">
                  +234 (708) 308-9127
                </a>
              </li>
              <li>
                <a href="mailto:chisomhenryg@gmail.com" className="hover:text-white transition-colors break-words">
                  chisomhenryg@gmail.com
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  chisom.dev
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">Get the latest information</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-0">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-l-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-full transition-all duration-300 flex items-center justify-center"
                aria-label="Subscribe to newsletter"
              >
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 md:px-6 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              Copyright© {new Date().getFullYear()} Chisom. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-white transition-colors">
                User Terms & Conditions
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
