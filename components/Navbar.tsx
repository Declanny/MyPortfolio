"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineUser, AiOutlinePhone} from 'react-icons/ai';

// Decorative SVG Component
const DecorativeSVG = () => {
  return (
    <motion.svg 
      className="absolute right-0 top-full w-32 h-32 text-white opacity-50"
      viewBox="0 0 100 100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      {/* Abstract lines resembling a creative/artistic drawing */}
  
 
    </motion.svg>
  );
};

// Navbar Component with glass morphism and active link indicator
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-md bg-gray-900/80 shadow-lg' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 relative">
        {/* Mobile Menu Icon Toggle (on the left) */}
        <div className="md:hidden">
          {sidebarOpen ? (
            <AiOutlineClose 
              className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition-colors duration-200" 
              onClick={toggleSidebar}
            />
          ) : (
            <AiOutlineMenu 
              className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition-colors duration-200" 
              onClick={toggleSidebar}
            />
          )}
        </div>

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          <span className="text-white">
            Chisom.dev
          </span>
        </motion.h1>

        {/* Desktop Links with Active Indicator */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <Link 
                href={item.path} 
                className={`text-white hover:text-gray-300 transition-all duration-300 pb-1 ${
                  pathname === item.path ? 'font-medium' : ''
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-sm"
                    layoutId="navIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Placeholder for another feature on the right */}
        <div className="md:hidden"></div>
        
        {/* Decorative SVG only on home page */}
        {isHomePage && <DecorativeSVG />}
      </div>

      {/* Collapse-style mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: sidebarOpen ? 1 : 0, 
          height: sidebarOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden backdrop-blur-md bg-gray-900/95 border-t border-gray-700/30"
      >
        <ul className="flex flex-col space-y-1 py-4 px-4">
          {navItems.map((item, index) => (
            <li key={index} className="group relative">
              <Link 
                href={item.path} 
                className={`flex items-center space-x-3 py-3 px-4 rounded-lg text-white hover:bg-gray-800/50 transition-all duration-200 ${
                  pathname === item.path ? 'bg-gray-800/50 font-medium' : ''
                }`} 
                onClick={toggleSidebar}
              >
                {index === 0 && <AiOutlineHome className="text-gray-400 group-hover:text-white transition-colors w-5 h-5" />}
                {index === 1 && <AiOutlineUser className="text-gray-400 group-hover:text-white transition-colors w-5 h-5" />}
                {index === 2 && <AiOutlinePhone className="text-gray-400 group-hover:text-white transition-colors w-5 h-5" />}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;