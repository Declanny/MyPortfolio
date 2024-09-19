"use client"; // Client Component

import React, { useState } from 'react';
import {
  AiFillSlackCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram
} from 'react-icons/ai';

const ContactPage = () => {
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setNotification('Message sent successfully! The owner will get back to you shortly.');
      setMessage('');
    } else {
      setNotification('Please enter a message before sending.');
    }
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      {/* Vision Section */}
      <section className="mb-10 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800">Web Development Vision</h2>
        <p className="text-xl mb-6 text-gray-600 leading-relaxed">
          Web development is about crafting dynamic and interactive web applications that enhance user experiences.
          The future vision is a blend of creativity, innovation, and user-first designs for the modern web.
        </p>
        <a
          href="mailto:chisomhenryg@gmail.com"
          className="bg-white text-green-600 py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition duration-300 text-lg font-medium"
        >
          Contact Me
        </a>
      </section>

      {/* Social Media Handles Section */}
      <section className="mb-12 text-center">
        <h3 className="text-2xl font-semibold mb-5 text-gray-800">Find me on:</h3>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="https://slack.com" target="_blank" rel="noreferrer" className="text-[#4A154B] transition-transform transform hover:scale-110">
            <AiFillSlackCircle className="w-16 h-16" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#1877F2] transition-transform transform hover:scale-110">
            <AiFillFacebook className="w-16 h-16" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#1DA1F2] transition-transform transform hover:scale-110">
            <AiFillTwitterCircle className="w-16 h-16" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#0077B5] transition-transform transform hover:scale-110">
            <AiFillLinkedin className="w-16 h-16" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#E1306C] transition-transform transform hover:scale-110">
            <AiFillInstagram className="w-16 h-16" />
          </a>
        </div>
      </section>

      {/* Messaging Section */}
      <section className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send me a message</h3>
        <form onSubmit={handleMessageSubmit} className="space-y-4 max-w-2xl mx-auto">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <button type="submit" className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 text-lg font-medium">
            Send Message
          </button>
        </form>
        {notification && <p className="text-green-600 text-lg mt-4 animate-fadeIn">{notification}</p>}
      </section>
    </div>
  );
};

export default ContactPage;
