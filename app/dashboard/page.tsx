"use client"; // Add this at the top to mark as Client Component

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions

import Link from "next/link"; // Import Link from Next.js

// Dynamic import for the chart library
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ProjectPage = () => {
  // State for website analytics
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    contactClicks: 0,
    cvRequests: 0,
    dataPoints: [
      { time: '1H', value: 0 },
      { time: '1D', value: 0 },
      { time: '1W', value: 0 },
      { time: '1M', value: 0 },
      { time: '1Y', value: 0 },
    ],
  });

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchAnalytics = async () => {
      const data = {
        totalUsers: 1050,
        contactClicks: 200,
        cvRequests: 75,
        dataPoints: [
          { time: '1H', value: 50 },
          { time: '1D', value: 150 },
          { time: '1W', value: 800 },
          { time: '1M', value: 3200 },
          { time: '1Y', value: 12000 },
        ],
      };
      setAnalytics(data);
    };

    fetchAnalytics();
  }, []);

  // Example chart options with better styling and animations
  const chartOptions: ApexOptions = {
    chart: {
      id: 'analytics-chart',
      animations: {
        enabled: true,
        easing: 'easeinout', // This value should be valid according to ApexOptions
        dynamicAnimation: {
          speed: 1200,
        },
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#34D399', '#60A5FA'], // Updated colors for a sleek look
    xaxis: {
      categories: analytics.dataPoints.map((point) => point.time),
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
  };

  const chartSeries = [
    {
      name: 'Visitors',
      data: analytics.dataPoints.map((point) => point.value),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Dashboard */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Dashboard Info */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in-up">
              Website Analytics Dashboard
            </h1>
            <p className="text-lg font-light mb-8">
              Track user interactions, requests, and activities in real-time.
            </p>
          </div>
          {/* Analytics Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-scale-in">
            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">{analytics.totalUsers}</h3>
              <p>Total Users Visited</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">{analytics.contactClicks}</h3>
              <p>Contact Button Clicks</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">{analytics.cvRequests}</h3>
              <p>CV Requests</p>
            </div>
          </div>
          {/* Crypto-like Chart */}
          <div className="mt-12">
            <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
          </div>
        </div>
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 animate-pulse"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-5xl font-semibold mb-14 text-gray-800">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { 
          src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1727859444/portFirst_qebhlf.jpg", 
          title: "RealEstate Project", 
          link: "https://homeacq.vercel.app/"
        },
        { 
          src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1727951559/IMG_0516_k21rxe.jpg", 
          title: "RealEstate Project", 
          link: "https://homeacq.vercel.app/"
        },
        { 
          src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1727951559/IMG_0516_k21rxe.jpg", 
          title: "RealEstate Project", 
          link: "https://homeacq.vercel.app/"
        },
      ].map((project, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow-lg transition-all hover:shadow-xl"
        >
          <Link href={project.link || "#"} target="_blank" rel="noopener noreferrer">
            {/* Use Next.js Image component for optimized loading */}
            <Image
              src={project.src}
              alt={project.title}
              width={600}
              height={350}
              className="rounded-lg mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </Link>
          <p className="mt-3 text-gray-600">
            {project.title === "RealEstate Project" ? "This is RealEstate Project" : "Project description here."}
          </p>

          {/* View Site Button */}
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                View Site
              </button>
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default ProjectPage;
