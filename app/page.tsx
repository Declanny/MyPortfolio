"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar'; // Import the Navbar component
import StickyScrollSection from '@/components/StickyScrollSection'; // Import the StickyScrollSection component

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
      <span className="text-black">
        {displayedText}
      </span>
      <span className="animate-pulse text-gray-600">|</span>
    </h2>
  );
});
TextAnimation.displayName = "TextAnimation";

// Simple interface for hero section projects
interface HeroProject {
  src: string;
  title: string;
  link: string;
}

// Main Page Component
const Page: React.FC = () => {
  const words = "Hi, I'm Chisom — Full-Stack Developer & Business Strategy Consultant";
  
  // Projects array for hero section grid
  const projects: HeroProject[] = [
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746448959/Screenshot_2025-05-05_at_1.42.23_PM_mrncnp.png", 
      title: "Global Logistic Platform", 
      link: "https://www.envoyangel.com/"
    },
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1752490355/Screenshot_2025-07-14_at_11.08.33_AM_jx3jj6.png", 
      title: "Naija CP", 
      link: "https://www.naijacp.com/"
    },
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746450397/Screenshot_2025-05-05_at_2.06.05_PM_pzmevo.png", 
      title: "Real Estate Investment", 
      link: "https://qarba.com/"
    },
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746451219/Screenshot_2025-05-05_at_2.19.47_PM_tj2xcg.png", 
      title: "Lyfecircle Group",
      link: "https://lyfecirclegroup.com/"
    },
    {
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1750434080/Screenshot_2025-06-20_at_4.41.08_PM_pq2u2r.png",
      title: "Freed AI Medical Scribe",
      link: "https://freed.com/"
    },
    {
      src: "/shieldedbit.png",
      title: "ShieldedBit",
      link: "https://shieldedbit.com/"
    },
  ];
  
  return (
    <>
      <Navbar /> {/* Use the imported Navbar component */}
      <div className="min-h-screen bg-white text-black">
        {/* Hero Section with minimal styling */}
        <section className="pt-20 md:pt-44 pb-12 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-white"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-gray-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8 relative z-10 max-w-7xl">
            <div className="w-full md:w-1/2 lg:pr-8 text-center md:text-left">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-black">
                  Building Digital <br />Experiences
                </span>
              </h1>
              
              <div className="mt-4 mb-8">
                <TextAnimation words={words} />
              </div>

              <div className="flex flex-row gap-2 sm:gap-4 justify-center md:justify-start flex-wrap">
                <a
                  href="#projects"
                  className="bg-orange-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 font-medium"
                >
                  View My Work
                </a>
                
                <a
                   href="#contact"
                   className="bg-transparent border border-orange-500 backdrop-blur-sm py-3 px-6 rounded-full shadow-lg hover:bg-orange-50 transition-all duration-300 text-black"
                >
                  Get In Touch
                </a>

                <a
                  href="https://github.com/Declanny"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-200 border border-orange-500 py-3 px-6 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-2 text-black"
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
                </a>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
                {projects.map((project, index) => (
                <div
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 border border-gray-300 shadow-lg group-hover:shadow-xl group-hover:shadow-gray-300/50 transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={project.src}
                        alt={project.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                        </div>
                      </div>
                    </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Scroll Section */}
        <StickyScrollSection />

        {/* Contact Section with full form */}
        <section id="contact" className="py-12 md:py-24 relative">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dqbbm0guw/image/upload/v1755615948/entrepreneurship-launch-rocket-start-flying-up-network-line-connection-startup-concept-plan-development-business-project-digital_1_lfpini.png')] bg-cover bg-center bg-no-repeat opacity-10"></div>
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="text-black">
                  Let&apos;s Connect
                </span>
              </h2>
              
              <p className="text-xl mb-10 text-gray-700 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I&apos;m always open to new opportunities 
                and exciting challenges in the world of web development.
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form Section */}
              <div className="relative z-10">
                <div className="backdrop-blur-lg bg-white/80 border border-gray-300 rounded-xl p-8 shadow-xl">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    <span className="text-black">
                      Send Me a Message
                    </span>
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 ml-1">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 ml-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 ml-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Project Inquiry"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 ml-1">Your Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-orange-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 font-medium w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Social Section */}
              <div className="relative z-10 flex flex-col gap-8">
                {/* Contact Information */}
                <div className="backdrop-blur-lg bg-white/80 border border-gray-300 rounded-xl p-8 shadow-xl">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    <span className="text-black">
                  Get In Touch
                    </span>
                  </h3>
                  
                  <div className="space-y-5">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-gray-200 p-3 text-black mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-black">Email</h4>
                        <a href="mailto:chisomhenryg@gmail.com" className="text-gray-700 hover:text-black transition-colors">
                          chisomhenryg@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-gray-200 p-3 text-black mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-black">Phone</h4>
                        <a href="tel:+2347083089127" className="text-gray-700 hover:text-black transition-colors">
                          +234 (708) 308-9127
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                
                {/* CV Button */}
                <div className="backdrop-blur-lg bg-white/80 border border-gray-300 rounded-xl p-8 shadow-xl">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    <span className="text-black">
                      My Resume
                    </span>
                  </h3>
                  
                  <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                    Interested in learning more about my experience and qualifications? 
                    View my comprehensive CV to see my full professional background.
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <a
                      href="https://drive.google.com/file/d/11cTLcG7foelmUmv0MHs-t7u8Uo490Sf9/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white py-4 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 font-medium text-lg"
                    >
                      View CV
                    </a>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;