"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ScrollItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const scrollItems: ScrollItem[] = [
  {
    id: 1,
    title: "Kalabah B2B Marketplace",
    description: "A comprehensive B2B platform connecting global buyers with verified Nigerian suppliers, featuring secure payments, trade protection, and seamless cross-border trading.",
    image: "/kalabahproject.png",
    link: "https://www.kalabah.com/"
  },
  {
    id: 2,
    title: "Quivy Giveaway Platform",
    description: "Turn your events into unforgettable moments! Grow your brand with exciting giveaways. Draw in more participants, keep them engaged, and highlight your brand with prizes of your choice. With Quivy, creating, managing, and tracking your giveaway is quick and easy.",
    image: "/quivy.png",
    link: "https://www.quivy.io/"
  },
  {
    id: 3,
    title: "Digital Wallet & Gaming Platform",
    description: "A comprehensive platform for managing virtual products, game credits, and digital services across Nigeria.",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1752490355/Screenshot_2025-07-14_at_11.08.33_AM_jx3jj6.png",
    link: "https://www.naijacp.com/"
  },
  {
    id: 4,
    title: "Global Logistic Platform",
    description: "Transforming the shipping industry with cutting-edge technology and real-time tracking solutions.",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746448959/Screenshot_2025-05-05_at_1.42.23_PM_mrncnp.png",
    link: "https://www.envoyangel.com/"
  },
  {
    id: 5,
    title: "Real Estate Investment Management",
    description: "Powerful software solution for tracking and managing real estate investments with advanced analytics.",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746450397/Screenshot_2025-05-05_at_2.06.05_PM_pzmevo.png",
    link: "https://qarba.com/"
  },
  {
    id: 6,
    title: "Enterprise Technology Solutions",
    description: "Building scalable digital experiences for global enterprises with modern tech stacks and best practices.",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746451219/Screenshot_2025-05-05_at_2.19.47_PM_tj2xcg.png",
    link: "https://lyfecirclegroup.com/"
  },
  {
    id: 7,
    title: "AI-Powered Healthcare Tools",
    description: "Revolutionizing healthcare workflows with intelligent automation and HIPAA-compliant solutions.",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1750434080/Screenshot_2025-06-20_at_4.41.08_PM_pq2u2r.png",
    link: "https://freed.com/"
  }
];

const StickySection: React.FC<{ item: ScrollItem; index: number }> = ({ item, index }) => {
  return (
    <div className="sticky top-20 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* Image Section */}
            <div className="relative flex items-center justify-center p-4 md:p-6 lg:p-8 bg-gray-50 md:col-span-3">
              <div className="relative w-full max-w-[150%] md:max-w-[180%] lg:max-w-[200%] aspect-[2/1.5] md:aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 md:col-span-2 bg-gray-50">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                {item.description}
              </p>
              <Link 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 font-medium text-lg">
                  Visit Website
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const MobileProjectsSection: React.FC = () => {
  return (
    <div className="relative bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mobile Image */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/naijacpmobile2.jpeg"
                  alt="Naija CP Mobile App"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Naija CP Mobile App
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                A comprehensive mobile platform for purchasing game credits, virtual products, and digital services across Nigeria. The app provides a seamless shopping experience with features for managing gaming needs, airtime, cable TV subscriptions, and electricity bills.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Built with modern mobile technologies, the app offers an intuitive interface, secure payments, and real-time balance management, making it the go-to platform for gamers and digital service users.
              </p>
              <Link 
                href="https://apps.apple.com/ng/app/naijacp/id6736952134" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 font-medium text-lg">
                  Download App
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const StickyScrollSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');

  return (
    <section id="projects" className="relative">
      {/* Header Section with Tabs */}
      <div className="bg-white pt-12 pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Let&apos;s have a look at my recent projects.
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('web')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'web'
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Web projects
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'mobile'
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Mobile projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {activeTab === 'web' ? (
        <div className="relative bg-gray-50 pb-20">
          {scrollItems.map((item, index) => (
            <StickySection key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <MobileProjectsSection />
      )}
    </section>
  );
};

export default StickyScrollSection;
