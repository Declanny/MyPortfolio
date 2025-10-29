"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineUser, AiOutlinePhone, AiOutlineFileText } from 'react-icons/ai';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: AiOutlineHome },
    { name: 'About', path: '/about', icon: AiOutlineUser },
    { name: 'Contact', path: '/#contact', icon: AiOutlinePhone },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      <nav
        className={`transition-all duration-500 ${
          scrolled 
            ? 'bg-gray-900 shadow-xl' 
            : 'bg-gray-900'
        } w-full md:max-w-[1270px] md:h-[70px] md:rounded-2xl flex items-center justify-center md:px-8 md:py-0`}
      >
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -ml-2 absolute left-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <AiOutlineClose className="w-6 h-6 text-white" />
          ) : (
            <AiOutlineMenu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full h-full px-8">
          {/* Left side items */}
          <div className="flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${
                pathname === '/' || pathname === ''
                  ? 'bg-orange-500 text-white border border-black font-medium'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${
                pathname === '/about'
                  ? 'bg-orange-500 text-white border border-black font-medium'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${
                'text-white hover:text-orange-500'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Logo - Center */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CH</span>
            </div>
            <span className="text-white font-bold text-lg">Chisom.dev</span>
          </Link>

          {/* Right side items */}
          <div className="flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/#projects"
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${
                'text-white hover:text-orange-500'
              }`}
            >
              Projects
            </Link>
            <Link
              href="https://drive.google.com/file/d/11cTLcG7foelmUmv0MHs-t7u8Uo490Sf9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${
                'text-white hover:text-orange-500'
              }`}
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Mobile Logo */}
        <h1
          className="md:hidden text-white text-xl font-bold cursor-pointer flex-1 text-center"
          onClick={handleLogoClick}
        >
          <Link href="/" className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">CH</span>
            </div>
            <span>Chisom.dev</span>
          </Link>
        </h1>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[400px]' : 'max-h-0'
          } absolute top-[60px] left-0 right-0 bg-gray-900 rounded-b-2xl`}
        >
          <div className="border-t border-gray-700">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path.replace('#', ''));
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`flex items-center space-x-3 py-4 px-6 text-white hover:bg-gray-800 transition-colors ${
                    active ? 'bg-gray-800 font-medium border-l-4 border-orange-500' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base">{item.name}</span>
                </Link>
              );
            })}
            <Link
              href="/#projects"
              className="flex items-center space-x-3 py-4 px-6 text-white hover:bg-gray-800 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineFileText className="w-5 h-5 flex-shrink-0" />
              <span className="text-base">Projects</span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/11cTLcG7foelmUmv0MHs-t7u8Uo490Sf9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 py-4 px-6 text-white hover:bg-gray-800 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineFileText className="w-5 h-5 flex-shrink-0" />
              <span className="text-base">Resume</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
