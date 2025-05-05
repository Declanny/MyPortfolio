"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineUser, AiOutlinePhone} from 'react-icons/ai';

// Navbar Component with glass morphism
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-md bg-white/10 dark:bg-gray-900/80 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
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

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Contact'].map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-white hover:bg-gradient-to-r from-blue-400 to-teal-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Placeholder for another feature on the right */}
        <div className="md:hidden"></div>
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
          <li className="flex items-center space-x-3 group">
            <AiOutlineHome className="text-blue-400 group-hover:text-teal-400 transition-colors" />
            <Link href="/" className="text-white group-hover:text-teal-400 transition-colors" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-3 group">
            <AiOutlineUser className="text-blue-400 group-hover:text-teal-400 transition-colors" />
            <Link href="/about" className="text-white group-hover:text-teal-400 transition-colors" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          
          <li className="flex items-center space-x-3 group">
            <AiOutlinePhone className="text-blue-400 group-hover:text-teal-400 transition-colors" />
            <Link href="/contact" className="text-white group-hover:text-teal-400 transition-colors" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;