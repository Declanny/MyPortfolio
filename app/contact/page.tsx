'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import {
  AiFillSlackCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram
} from 'react-icons/ai';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [notification, setNotification] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setNotification('Message sent successfully! I will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Clear notification after 5 seconds
      setTimeout(() => {
        setNotification('');
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] opacity-20 mix-blend-lighten pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-10 pointer-events-none"></div>
      
        {/* Hero Section */}
        <section className="relative z-10 max-w-5xl mx-auto mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'm always open to new opportunities 
              and exciting challenges in the world of web development.
            </p>
          </motion.div>
        </section>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Send Me a Message
                </span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 ml-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all resize-none"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-medium w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
              
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                >
                  {notification}
                </motion.div>
              )}
            </div>
          </motion.section>

          {/* Contact Info & Social Section */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 flex flex-col gap-8"
          >
            {/* Contact Information */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-3 text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <a href="mailto:chisom@example.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      chisom@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-3 text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-3 text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Section */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Connect With Me
                </span>
              </h2>
              
              <div className="grid grid-cols-5 gap-4">
              <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center"
                >
                  <AiFillLinkedin className="w-12 h-12 text-blue-500 hover:text-blue-400 transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://slack.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center"
                >
                  <AiFillSlackCircle className="w-12 h-12 text-purple-400 hover:text-purple-300 transition-colors" />
                </motion.a>
                
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center"
                >
                  <AiFillFacebook className="w-12 h-12 text-blue-400 hover:text-blue-300 transition-colors" />
                </motion.a>
                
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center"
                >
                  <AiFillTwitterCircle className="w-12 h-12 text-blue-400 hover:text-blue-300 transition-colors" />
                </motion.a>
                
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center"
                >
                  <AiFillInstagram className="w-12 h-12 text-pink-400 hover:text-pink-300 transition-colors" />
                </motion.a>
              </div>
            </div>
          </motion.section>
        </div>
        
        {/* Vision Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto mt-24 text-center"
        >
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                My Web Development Vision
              </span>
            </h2>
            
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              Web development is about crafting dynamic and interactive web applications that enhance user experiences.
              My vision combines creativity, innovation, and user-first designs to create modern web experiences that 
              not only meet but exceed expectations. I believe in building scalable, accessible, and performant 
              applications that make a real difference.
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:chisom@example.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 py-3 px-8 rounded-full text-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Discuss Your Project
            </motion.a>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ContactPage;