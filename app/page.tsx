"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar'; // Import the Navbar component

// Define interface for TextAnimation props
interface TextAnimationProps {
  words: string;
}

// Custom text animation component with modern look
const TextAnimation: React.FC<TextAnimationProps> = ({ words }) => {
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
};

// Define interfaces for structured data
interface Skill {
  name: string;
  logo: string;
}

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
  
  // Define skills array with proper typing
  const skills: Skill[] = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  // Define projects array with proper typing
  const projects: Project[] = [
    { 
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746448959/Screenshot_2025-05-05_at_1.42.23_PM_mrncnp.png", 
      title: "Global Logistic Platform", 
      desc: "Envoy Angel is an innovative logistics company that leverages technology to transform the shipping industry. Our platform connects businesses with reliable carriers while providing real-time tracking and analytics.",
      link: "https:envoyangel.com",
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
  ];
  
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
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-2xl opacity-30"></div>
                <Image
                  src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1746447146/Screenshot_2025-05-05_at_1.11.37_PM_gc0bhd.png"
                  alt="Developer Picture"
                  width={400}
                  height={400}
                  className="rounded-3xl object-cover shadow-2xl border-4 border-white/10 backdrop-blur-sm relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section with modern cards */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-14"
            >
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                My Skills
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg text-lg font-medium flex items-center"
                >
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={40}
                    height={40}
                    className="mr-4"
                  />
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section with showcase style */}
        <section id="projects" className="py-20 relative">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-14"
            >
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.title}
                      width={600}
                      height={350}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs py-1 px-2 bg-white/10 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
                      >
                        View Project
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
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
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:chisomhenryg@gmail.com"
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 py-4 px-10 rounded-full text-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;