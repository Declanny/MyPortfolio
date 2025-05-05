'use client';

import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} Chisom. All rights reserved.</p>
      <div className="flex justify-center space-x-6">
        {/* Twitter Icon */}
        <a
                  href="https://x.com/11declan_?s=21&t=UOzvhZvwZuAe5hZuC1YiyQ" 
                  target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors duration-300"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
        </a>
        
        {/* Instagram Icon */}
        <a
                  href="https://www.instagram.com/11declan?igsh=bHN3dGxrMW5oYmE0&utm_source=qr" 
                  target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        
        {/* GitHub Icon */}
        <a
          href="https://github.com/Declanny"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        
        
        {/* LinkedIn Icon */}
        <a
                  href="https://www.linkedin.com/in/chisomhenryg/" 
                  target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
