"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineUser, AiOutlineDashboard, AiOutlinePhone } from 'react-icons/ai'; // Import necessary icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle logo click
  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gradient-to-r from-blue-500 to-green-500 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Mobile Menu Icon (on the left) */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer mr-4"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </div>

        {/* Logo */}
        <h1
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          My Portfolio
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-white hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Placeholder for another feature on the right */}
        <div className="md:hidden text-white text-3xl">
          {/* This is where you can add the new feature on the right */}
        </div>
      </div>

      {/* Sidebar (for mobile view) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden z-40`}
      >
        {/* Sidebar Navbar */}
        <div className="flex justify-between items-center bg-gray-700 py-4 px-4">
          {/* My Portfolio Text */}
          <h2 className="text-white text-xl font-bold">My Portfolio</h2>

          {/* Close Icon */}
          <AiOutlineClose
            className="w-6 h-6 text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Sidebar Links with Icons */}
        <ul className="flex flex-col space-y-6 mt-8 px-6">
          <li className="flex items-center space-x-2">
            <AiOutlineHome className="text-white" />
            <Link href="/" className="text-white hover:underline" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <AiOutlineUser className="text-white" />
            <Link href="/about" className="text-white hover:underline" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <AiOutlineDashboard className="text-white" />
            <Link href="/dashboard" className="text-white hover:underline" onClick={toggleSidebar}>
              Dashboard
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <AiOutlinePhone className="text-white" />
            <Link href="/contact" className="text-white hover:underline" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
