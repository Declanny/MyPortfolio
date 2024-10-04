'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Importing next/image for optimized images

const About = () => {
  const [cvRequested, setCvRequested] = useState(false);

  const handleRequestCV = () => {
    setCvRequested(true);
    alert('Request sent! You will receive permission soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left Section: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              About Me
            </h1>
            <p className="text-lg font-light mb-8">
              Hi, I&#39;m Chisom, a Full-Stack Developer specializing in modern technologies like React, Next.js, and Tailwind CSS. I have a passion for creating seamless user experiences and high-quality applications.
            </p>
            <p className="text-lg font-light mb-8">
              With several years of experience in development, I aim to deliver scalable and efficient solutions for various projects.
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dqbbm0guw/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727183081/portfolio_z2ldxh.jpg"
              alt="About Developer"
              width={450}
              height={450}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-semibold mb-12 text-gray-800">Achievements & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Years of Experience', value: '5+' },
              { title: 'Projects Completed', value: '30+' },
              { title: 'Technologies Mastered', value: '10+' },
            ].map((achievement, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg text-gray-800">
                <h3 className="text-3xl font-bold mb-4">{achievement.value}</h3>
                <p className="text-lg font-light">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-semibold mb-8 text-gray-800">View My CV</h2>
          <p className="text-lg font-light mb-8 text-gray-600">
            Interested in learning more about my experience and qualifications? You can request access to view my CV.
          </p>

          {/* CV Request Permission Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">Request Permission</h3>
            <p className="mb-6 text-gray-600">
              To view my CV, you will need to request permission. Once approved, I will send you a link to download the CV.
            </p>

            <button
              onClick={handleRequestCV}
              className={`${
                cvRequested ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } text-white py-3 px-6 rounded-full transition-all duration-300`}
              disabled={cvRequested}
            >
              {cvRequested ? 'Request Sent' : 'Request CV Access'}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 font-light">
            Interested in collaborating or learning more? Let’s chat!
          </p>
          <a
            href="mailto:chisom@example.com"
            className="bg-white text-green-600 py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
