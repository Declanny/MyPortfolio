'use client';
import React from 'react';
import Navbar from '@/components/Navbar';

const About: React.FC = () => {

  // Define achievements array with proper typing
  // const achievements: Achievement[] = [
  //   { title: 'Years of Experience', value: '2+' },
  //   { title: 'Projects Completed', value: '8+' },
  //   { title: 'Technologies Mastered', value: '10+' },
  // ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black">

        

        {/* About & CV Section - 50/50 Layout */}
        <section className="pt-20 pb-12 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 to-gray-200/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* About Section */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  <span className="text-black">
                    My Experience
                  </span>
                </h2>
                
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  I&apos;m a Full-Stack Developer and Business Strategy Consultant with experience working in competitive startups across various development phases. From initial brainstorming sessions to product launch and scaling, I&apos;ve been involved in every stage of the development lifecycle.
                </p>
                
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  My expertise spans modern technologies including React Native, React, Vue, Next.js, and Tailwind CSS. I&apos;ve worked with diverse industries - from logistics and gaming platforms to healthcare and cybersecurity - delivering scalable solutions that drive business growth.
                </p>
                
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  I specialize in transforming ideas into robust digital products, combining technical excellence with strategic thinking to ensure solutions not only meet current needs but scale for future growth.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Constantly learning emerging technologies and staying updated with industry best practices to deliver cutting-edge solutions that make a real impact.
                </p>
              </div>

              {/* CV Section */}
              <div className="flex flex-col justify-center">
                <div className="backdrop-blur-lg bg-white/80 border border-gray-300 p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl md:text-3xl font-bold mb-6 text-black">
                    View My CV
                  </h3>
                  
                  <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                    Interested in learning more about my experience and qualifications? 
                    View my comprehensive CV to see my full professional background, skills, and achievements.
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

        {/* Contact Section - Matching homepage style */}
        <section className="py-12 md:py-24 relative">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dqbbm0guw/image/upload/v1755615948/entrepreneurship-launch-rocket-start-flying-up-network-line-connection-startup-concept-plan-development-business-project-digital_1_lfpini.png')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10 max-w-7xl">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                <span className="text-black">
                  Let&apos;s Connect
                </span>
              </h2>
              
              <p className="text-xl mb-10 text-gray-700 max-w-2xl mx-auto">
                Ready to bring your ideas to life? I&apos;m currently available for freelance projects 
                and exciting collaborations.
              </p>
              
              <a
                href="mailto:chisomhenryg@gmail.com"
                className="inline-block bg-orange-500 text-white py-4 px-10 rounded-full text-lg font-medium shadow-lg hover:bg-orange-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;