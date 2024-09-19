"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import menu and close icons

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
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
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

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </div>
      </div>

      {/* Sidebar (for mobile view) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40`} // Ensure sidebar has a high z-index
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose className="w-6 h-6 text-white cursor-pointer" onClick={toggleSidebar} />
        </div>
        <ul className="flex flex-col space-y-6 mt-8 px-6">
          <li>
            <Link href="/" className="text-white hover:underline" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:underline" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-white hover:underline" onClick={toggleSidebar}>
              Dashboard
            </Link>
          </li>
          <li>
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
