'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';

// Define interface for TextAnimation props
interface TextAnimationProps {
  words: string;
}

// Custom text animation component (matching homepage style)
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

// Interface for achievement items
// interface Achievement {
//   title: string;
//   value: string;
// }

const About: React.FC = () => {
  const words = "Full-Stack Developer & Business Strategy Consultant";

  // Define achievements array with proper typing
  // const achievements: Achievement[] = [
  //   { title: 'Years of Experience', value: '2+' },
  //   { title: 'Projects Completed', value: '8+' },
  //   { title: 'Technologies Mastered', value: '10+' },
  // ];

  return (
    <>
      <Navbar />
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
                  About Me
                </span>
              </h1>
              
              <div className="mt-4 mb-8">
                <TextAnimation words={words} />
              </div>

              <p className="text-lg font-light mb-8 text-gray-300">
                Hi, I&apos;m Chisom, a passionate creator of digital experiences specializing in modern technologies like React Native, React, Vue, Next.js, and Tailwind CSS. With several years of experience in Software development, I deliver scalable and efficient solutions that focus on exceptional user experiences.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-2xl opacity-30"></div>
             
                <Image
                  src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1746447146/Screenshot_2025-05-05_at_1.11.37_PM_gc0bhd.png"
                  alt="About Developer"
                  width={400}
                  height={400}
                  className="rounded-full object-cover shadow-2xl border-4 border-white/10 backdrop-blur-sm relative z-10 w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        

        {/* CV Section - Updated with direct link */}
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
                  View My CV
                </span>
              </h2>
              
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Interested in learning more about my experience and qualifications?
                View my comprehensive CV to see my full professional background.
              </p>
            </motion.div>

            {/* CV View Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg max-w-md mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                My Resume
              </h3>
              <p className="mb-6 text-gray-300">
                Check out my detailed CV to learn more about my professional experience, skills, and qualifications.
              </p>

              <motion.a
                href="https://drive.google.com/file/d/18q00pKRG2CfCs1zBXQOBI_II9Dp3iIkr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-medium"
              >
                View 
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section - Matching homepage style */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Let&apos;s Connect
                </span>
              </h2>
              
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Ready to bring your ideas to life? I&apos;m currently available for freelance projects 
                and exciting collaborations.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:chisom@example.com"
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

export default About;