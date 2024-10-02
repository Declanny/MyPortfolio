"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect"; // Import text effect
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const words = `Hi, I'm Chisom — Full-Stack Developer & A Business Strategy Consultant`;

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-24">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          {/* Left Section: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Welcome to My Portfolio
            </h1>
            {/* Replace static text with TextGenerateEffect */}
            <div className="mt-4 mb-6 px-2 py-2">
              <TextGenerateEffect words={words} />
            </div>

            <a
              href="#projects"
              className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dqbbm0guw/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727183081/portfolio_z2ldxh.jpg"
              alt="Developer Picture"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

   {/* Skills Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-5xl font-semibold mb-14 text-gray-800">
      My Skills
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          // Updated Tailwind CSS logo source
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Redux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ].map((skill, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-md text-lg font-medium text-gray-700 flex items-center"
        >
          {/* Logo */}
          <Image
            src={skill.logo}
            alt={`${skill.name} logo`}
            width={40}
            height={40}
            className="mr-4"
          />
          {/* Skill Name */}
          {skill.name}
        </div>
      ))}
    </div>
  </div>
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
          src: "/project2.jpg", 
          title: "Project 2" 
        },
        { 
          src: "/project3.jpg", 
          title: "Project 3" 
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

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 font-light">
            Interested in collaborating? Let’s talk!
          </p>
          <a
            href="mailto:chisomhenryg@gmail.com"
            className="bg-white text-green-600 py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default page;
