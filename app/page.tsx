"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar'; // Import the Navbar component

// Define interface for TextAnimation props
interface TextAnimationProps {
  words: string;
}

// Custom text animation component with modern look
const TextAnimation: React.FC<TextAnimationProps> = React.memo(({ words }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, words]);

  return (
    <h2 className="text-xl md:text-2xl font-medium">
      <span className="text-white">
        {displayedText}
      </span>
      <span className="animate-pulse text-gray-400">|</span>
    </h2>
  );
});
TextAnimation.displayName = "TextAnimation";

interface Project {
  src: string;
  title: string;
  desc: string;
  link: string;
  tags: string[];
}

// Main Page Component
const Page: React.FC = () => {
  const words = "Hi, I'm Chisom — Full-Stack Developer & Business Strategy Consultant";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});
  
  // Function to toggle description expansion
  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  // Define projects array with proper typing
  const projects: Project[] = [
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746448959/Screenshot_2025-05-05_at_1.42.23_PM_mrncnp.png", 
      title: "Global Logistic Platform", 
      desc: "Envoy Angel is an innovative logistics company that leverages technology to transform the shipping industry. Our platform connects businesses with reliable carriers while providing real-time tracking and analytics.",
      link: "https://www.envoyangel.com/",
      tags: ["React", "API", "Tailwind", "Charts"]
    },
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1752490355/Screenshot_2025-07-14_at_11.08.33_AM_jx3jj6.png", 
      title: "Naija CP – Digital Wallet & Gaming Credit Platform (Nigeria)", 
      desc: "Naija CP is a fast-growing Nigerian digital platform that allows users to buy and manage virtual products such as game credits (e.g., Call of Duty CP, PUBG UC), airtime, cable TV subscriptions, and electricity bills — all in one place. The platform combines convenience, speed, and affordability for gamers, resellers, and everyday users across Nigeria.",
      link: "https://www.naijacp.com/",
      tags: ["JavaScript", "React", "Tailwind",]
    },
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746450397/Screenshot_2025-05-05_at_2.06.05_PM_pzmevo.png", 
      title: "Real Estate Investment Management", 
      desc: "Qarba is Real Estate Investment Management Software that helps you manage your real estate investments and track your portfolio performance.",
      link: "https://qarba.com/",
      tags: ["JavaScript", "Charts", "API", "Tailwind", "Google Maps"]
    },
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746451219/Screenshot_2025-05-05_at_2.19.47_PM_tj2xcg.png", 
      title: "Lyfecircle Group",
      desc: "LyfeCircle Group is a transnational and technology, digital and experiential driven conglomerate, with vibrant member companies and ...",
      link: "https://lyfecirclegroup.com/",
      tags: ["Next.js", "Tailwind", "3D", "Node.js", "MongoDb"]
    },
    {
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1750434080/Screenshot_2025-06-20_at_4.41.08_PM_pq2u2r.png",
      title: "Freed AI Medical Scribe",
      desc: "Freed Inc. offers an AI-powered medical scribe tool for healthcare providers. Freed's AI listens to doctor–patient conversations and generates structured clinical notes (SOAP format) for review. Over 20,000 clinicians use it to save 2+ hours per day. HIPAA-compliant, SOC 2 & HITECH certified.",
      link: "https://freed.com/",
      tags: ["AI", "Healthcare", "Next.js", "Security"]
    },
    {
      src: "/shieldedbit.png",
      title: "ShieldedBit - Cyber Security & IT Career Development",
      desc: "Developed a comprehensive website for ShieldedBit, a leading cyber security company offering comprehensive security strategies for growth and resilience. The platform includes IT career development programs and serves leading companies worldwide with advanced cyber security solutions.",
      link: "https://shieldedbit.com/",
      tags: ["Cyber Security", "IT Career Development", "Web Development", "Next.js", "Security"]
    },
  ];

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 350; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 350; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Check scroll position to update button states
  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
      
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, [checkScrollPosition]);
  
  return (
    <>
      <Navbar /> {/* Use the imported Navbar component */}
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section with minimal styling */}
        <section className="pt-20 md:pt-44 pb-12 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-gray-800 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8 relative z-10 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 lg:pr-8 text-center md:text-left"
            >
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">
                  Building Digital <br />Experiences
                </span>
              </h1>
              
              <div className="mt-4 mb-8">
                <TextAnimation words={words} />
              </div>

              <div className="flex flex-row gap-2 sm:gap-4 justify-center md:justify-start flex-wrap">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="bg-white text-black py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 font-medium"
                >
                  View My Work
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                   href="#contact"
                   className="bg-transparent border border-gray-600 backdrop-blur-sm py-3 px-6 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300"
                >
                  Get In Touch
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Declanny"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 border border-gray-600 py-3 px-6 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg 
                    className="w-5 h-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </motion.a>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 mb-8 md:mb-0"
            >
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
                {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-800 border border-gray-700 shadow-lg group-hover:shadow-xl group-hover:shadow-gray-500/10 transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={project.src}
                        alt={project.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                        </div>
                      </div>
                    </div>
                </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section with improved horizontal scrolling */}
        <section id="projects" className="py-12 md:py-20 relative">
          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold mb-14 text-center"
            >
              <span className="text-white">
                Featured Projects
              </span>
            </motion.h2>
            
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="hidden lg:flex justify-center mb-8 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                  className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    canScrollLeft 
                      ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                      : 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                  className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    canScrollRight 
                      ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                      : 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Projects Container */}
              <div className="relative overflow-hidden">
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                  style={{ 
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-none w-80 lg:w-96 backdrop-blur-lg bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-300"
                    >
                      {/* Card Content Container */}
                      <div className="flex flex-col h-full">
                        {/* Image Section */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={project.src}
                            alt={project.title}
                            width={600}
                            height={350}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex flex-col flex-grow p-6">
                          {/* Title */}
                          <h3 className="text-xl md:text-3xl font-bold mb-3 text-white line-clamp-2">
                            {project.title}
                          </h3>
                          
                          {/* Description Section - Fixed Height */}
                          <div className="mb-4">
                            <div className="relative">
                              <p className={`text-gray-300 text-sm lg:text-base leading-relaxed ${!expandedDescriptions[index] ? 'line-clamp-3' : ''}`}>
                                {project.desc}
                              </p>
                              {project.desc.length > 100 && (
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    toggleDescription(index);
                                  }}
                                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 mt-1 inline-flex items-center gap-1"
                                >
                                  {expandedDescriptions[index] ? (
                                    <>
                                      Show Less
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                      </svg>
                                    </>
                                  ) : (
                                    <>
                                      Read More
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Tags Section */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, idx) => (
                              <span 
                                key={idx} 
                                className="text-xs py-1 px-3 bg-gray-800 rounded-full border border-gray-600 hover:border-gray-500 hover:bg-gray-700 transition-colors duration-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Action Button - Always at Bottom */}
                          <div className="mt-auto">
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                              <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-white text-black py-3 px-4 rounded-lg hover:shadow-lg hover:bg-gray-200 transition-all duration-300 font-medium flex items-center justify-center gap-2 group"
                              >
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                Visit Website
                                <svg 
                                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Gradient overlays for scroll indication on mobile */}
                <div className="lg:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
                <div className="lg:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Mobile scroll indicator */}
              <div className="lg:hidden text-center mt-6">
                <p className="text-sm text-gray-400">← Swipe to explore more projects →</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with full form */}
        <section id="contact" className="py-12 md:py-24 relative">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dqbbm0guw/image/upload/v1755615948/entrepreneurship-launch-rocket-start-flying-up-network-line-connection-startup-concept-plan-development-business-project-digital_1_lfpini.png')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="text-white">
                  Let&apos;s Connect
                </span>
              </h2>
              
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I&apos;m always open to new opportunities 
                and exciting challenges in the world of web development.
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form Section */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="backdrop-blur-lg bg-gray-900/50 border border-gray-700 rounded-xl p-8 shadow-xl">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    <span className="text-white">
                      Send Me a Message
                    </span>
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2 ml-1">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2 ml-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 ml-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Project Inquiry"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 ml-1">Your Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all resize-none"
                      />
                    </div>
                    
                    <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-white text-black py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 font-medium w-full md:w-auto"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info & Social Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col gap-8"
              >
                {/* Contact Information */}
                <div className="backdrop-blur-lg bg-gray-900/50 border border-gray-700 rounded-xl p-8 shadow-xl">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    <span className="text-white">
                  Get In Touch
                    </span>
                  </h3>
                  
                  <div className="space-y-5">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-gray-700 p-3 text-white mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">Email</h4>
                        <a href="mailto:chisomhenryg@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                          chisomhenryg@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-gray-700 p-3 text-white mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">Phone</h4>
                        <a href="tel:+2347083089127" className="text-gray-300 hover:text-white transition-colors">
                          +234 (708) 308-9127
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Section */}
                <div className="backdrop-blur-lg bg-gray-900/50 border border-gray-700 rounded-xl p-8 shadow-xl">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    <span className="text-white">
                      Connect With Me
                    </span>
                  </h3>
                  
                  <div className="grid grid-cols-4 gap-4">
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      href="https://www.linkedin.com/in/chisomhenryg/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center"
                    >
                      <svg className="w-12 h-12 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      href="https://www.facebook.com/share/18gsNgGGSy/?mibextid=wwXIfr" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center"
                    >
                      <svg className="w-12 h-12 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                </motion.a>
                
                <motion.a
                      whileHover={{ y: -5, scale: 1.1 }}
                      href="https://x.com/11declan_?s=21&t=UOzvhZvwZuAe5hZuC1YiyQ" 
                  target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center"
                    >
                      <svg className="w-12 h-12 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      href="https://www.instagram.com/11declan?igsh=bHN3dGxrMW5oYmE0&utm_source=qr" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center"
                    >
                      <svg className="w-12 h-12 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-1.297 1.297c-1.297 0-2.448-.49-3.323-1.297C10.363 7.744 9.873 6.593 9.873 5.296s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </motion.a>
                  </div>
                </div>
                
                {/* CV Button */}
                <div className="backdrop-blur-lg bg-gray-900/50 border border-gray-700 rounded-xl p-8 shadow-xl">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    <span className="text-white">
                      My Resume
                    </span>
                  </h3>
                  
                  <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                    Interested in learning more about my experience and qualifications? 
                    View my comprehensive CV to see my full professional background.
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <motion.a
                      href="https://drive.google.com/file/d/18q00pKRG2CfCs1zBXQOBI_II9Dp3iIkr/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black py-4 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 font-medium text-lg"
                    >
                      View CV
                    </motion.a>
                  </div>
              </div>
            </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;