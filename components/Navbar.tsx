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
      <path 
        d="M10,50 Q30,20 50,50 T90,50" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeDasharray="1,3"
        className="animate-pulse"
      />
      <path 
        d="M20,30 C40,10 60,90 80,30" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
      <path 
        d="M30,10 Q50,90 70,10" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" />
      <circle cx="70" cy="30" r="2" fill="currentColor" />
      <circle cx="30" cy="30" r="2" fill="currentColor" />
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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-md bg-white/10 dark:bg-gray-900/80 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Mobile Menu Icon (on the left) */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
        </div>

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
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
                className={`text-white hover:bg-gradient-to-r from-blue-400 to-teal-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 pb-1 ${
                  pathname === item.path ? 'font-medium' : ''
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-sm"
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

      {/* Modern sidebar with blur effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 backdrop-blur-xl bg-gray-900/90 md:hidden z-40 border-r border-gray-700/30"
      >
        <div className="flex justify-between items-center bg-gray-800/50 py-4 px-4">
          <h2 className="text-white text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Menu
            </span>
          </h2>
          <AiOutlineClose
            className="w-6 h-6 text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        <ul className="flex flex-col space-y-6 mt-8 px-6">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-3 group relative">
              {index === 0 && <AiOutlineHome className="text-blue-400 group-hover:text-teal-400 transition-colors" />}
              {index === 1 && <AiOutlineUser className="text-blue-400 group-hover:text-teal-400 transition-colors" />}
              {index === 2 && <AiOutlinePhone className="text-blue-400 group-hover:text-teal-400 transition-colors" />}
              
              <Link 
                href={item.path} 
                className={`text-white group-hover:text-teal-400 transition-colors ${
                  pathname === item.path ? 'font-medium' : ''
                }`} 
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
              
              {pathname === item.path && (
                <motion.div 
                  className="absolute -left-6 w-1 h-6 bg-gradient-to-b from-blue-400 to-teal-400 rounded-r-sm"
                  layoutId="sidebarIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;