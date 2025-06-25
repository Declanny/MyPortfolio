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
      <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        {displayedText}
      </span>
      <span className="animate-pulse">|</span>
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
  
  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        },
        rotate: {
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut"
        }
      }
    }
  };
  
  // Glowing orbs animation
  const orbAnimation = {
    animate: (custom: number) => ({
      x: [0, custom * 15, 0],
      y: [0, custom * -10, 0],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        repeat: Infinity,
        duration: 3 + custom,
        ease: "easeInOut"
      }
    })
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
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746450397/Screenshot_2025-05-05_at_2.06.05_PM_pzmevo.png", 
      title: "Real Estate Investment Management", 
      desc: "Qaba is Real Estate Investment Management Software that helps you manage your real estate investments and track your portfolio performance.",
      link: "https://qaba.vercel.app/",
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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Hero Section with glass morphism */}
        <section className="pt-28 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] opacity-20 mix-blend-lighten"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Building Digital <br />Experiences
                </span>
              </h1>
              
              <div className="mt-4 mb-8">
                <TextAnimation words={words} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="bg-gradient-to-r from-blue-500 to-teal-500 py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-white font-medium"
                >
                  View My Work
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="bg-transparent border border-white/20 backdrop-blur-sm py-3 px-8 rounded-full shadow-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get In Touch
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Declanny"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 border border-white/20 py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
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

            {/* Enhanced Profile Image Container with Floating Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-2xl opacity-30"></div>
                
                {/* Floating decorative orbs with independent animations */}
                <motion.div
                  variants={orbAnimation}
                  animate="animate"
                  custom={1}
                  className="absolute top-6 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 blur-sm z-20"
                ></motion.div>
                <motion.div
                  variants={orbAnimation}
                  animate="animate"
                  custom={1.5}
                  className="absolute -bottom-2 left-10 w-6 h-6 bg-teal-400 rounded-full opacity-60 blur-sm z-20"
                ></motion.div>
                <motion.div
                  variants={orbAnimation}
                  animate="animate"
                  custom={2}
                  className="absolute top-1/2 -left-4 w-10 h-10 bg-purple-400 rounded-full opacity-40 blur-sm z-20"
                ></motion.div>
                <motion.div
                  variants={orbAnimation}
                  animate="animate"
                  custom={1.2}
                  className="absolute top-1/4 right-1/4 w-5 h-5 bg-pink-400 rounded-full opacity-40 blur-sm z-20"
                ></motion.div>
                
                {/* Main floating container with the profile image */}
                <motion.div
                  variants={floatingAnimation}
                  animate="animate"
                  className="relative z-10"
                >
                  {/* Amoeba-like SVG blob around profile picture */}
                  <svg
                    className="absolute inset-0 w-full h-full z-0"
                    viewBox="0 0 450 450"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M411.4 171.5c19.3 41.1 5.4 96-23.4 136.2-28.7 40.2-72.1 65.7-116.3 75.9-44.1 10.1-89 5-126.5-16.4-37.6-21.5-67.7-59.2-72.4-102.8-4.6-43.6 16.3-93.1 51.3-123.1 35.1-30 84.3-40.5 134.5-30.1 50.2 10.5 101.4 41.9 126 80.1 24.5 38.2 45.6 92.5 31.6 130.5-14 38-69.4 72.7-108.6 64.7-39.2-8-62.2-58.6-46.4-96.6 15.8-38 70.3-63.2 101.2-52.9 30.9 10.4 38.2 56.3 12.2 85.7"
                      fill="url(#blob-gradient)"
                      animate={{
                        d: [
                          "M411.4 171.5c19.3 41.1 5.4 96-23.4 136.2-28.7 40.2-72.1 65.7-116.3 75.9-44.1 10.1-89 5-126.5-16.4-37.6-21.5-67.7-59.2-72.4-102.8-4.6-43.6 16.3-93.1 51.3-123.1 35.1-30 84.3-40.5 134.5-30.1 50.2 10.5 101.4 41.9 126 80.1 24.5 38.2 45.6 92.5 31.6 130.5-14 38-69.4 72.7-108.6 64.7-39.2-8-62.2-58.6-46.4-96.6 15.8-38 70.3-63.2 101.2-52.9 30.9 10.4 38.2 56.3 12.2 85.7",
                          "M389.2 141.5c33.9 37.3 51.7 97.5 29.7 139.8-22 42.2-83.8 66.4-135.9 78.6-52 12.2-94.2 12.5-132.2-4.8-38-17.3-71.8-52.1-81.6-93.7-9.8-41.6 4.4-90 33-124.7 28.6-34.7 71.6-55.6 121.6-62.9 50-7.2 106.9-0.8 142.6 24.7 35.7 25.5 50.2 70.1 41.7 108.4-8.6 38.2-39.9 70.2-71.3 78.9-31.4 8.8-62.8-5.6-65.6-25.7-2.8-20 23-45.5 46.8-55 23.8-9.5 45.6-3 52.4 12.3",
                          "M411.4 171.5c19.3 41.1 5.4 96-23.4 136.2-28.7 40.2-72.1 65.7-116.3 75.9-44.1 10.1-89 5-126.5-16.4-37.6-21.5-67.7-59.2-72.4-102.8-4.6-43.6 16.3-93.1 51.3-123.1 35.1-30 84.3-40.5 134.5-30.1 50.2 10.5 101.4 41.9 126 80.1 24.5 38.2 45.6 92.5 31.6 130.5-14 38-69.4 72.7-108.6 64.7-39.2-8-62.2-58.6-46.4-96.6 15.8-38 70.3-63.2 101.2-52.9 30.9 10.4 38.2 56.3 12.2 85.7"
                        ],
                        transition: {
                          repeat: Infinity,
                          duration: 20,
                          ease: "easeInOut"
                        }
                      }}
                    />
                  </svg>

                  <Image
                    src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1746447146/Screenshot_2025-05-05_at_1.11.37_PM_gc0bhd.png"
                    alt="Developer Picture"
                    width={400}
                    height={400}
                    className="rounded-3xl object-cover shadow-2xl border-4 border-white/10 backdrop-blur-sm relative z-10"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section with improved horizontal scrolling */}
        <section id="projects" className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-14 text-center"
            >
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
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
                      className="flex-none w-80 lg:w-96 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.src}
                          alt={project.title}
                          width={600}
                          height={350}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 text-sm lg:text-base leading-relaxed">
                          {project.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs py-1 px-2 bg-white/10 rounded-full border border-white/20">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                          >
                            {/* Website icon */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            Visit Website
                          </motion.button>
                        </Link>
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

        {/* Contact Section with call-to-action */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-teal-900/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Let&apos;s Create Something Amazing
                </span>
              </h2>
              
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Ready to bring your ideas to life? I&apos;m currently available for freelance projects 
                and exciting collaborations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:chisomhenryg@gmail.com"
                  className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 py-4 px-10 rounded-full text-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Get In Touch
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Declanny"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 border border-white/20 py-4 px-10 rounded-full text-lg font-medium shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
                >
                  <svg 
                    className="w-6 h-6 mr-2" 
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;