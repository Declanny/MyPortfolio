import React from 'react';
import Image from 'next/image';

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
            <p className="text-lg font-light mb-8">
              Hi, I'm Chisom — Full-Stack Developer & Designer
            </p>
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
              src="/developer.jpg"
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
            {["JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "TypeScript", "Redux", "Git"].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-md text-lg font-medium text-gray-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-semibold mb-14 text-gray-800">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { src: '/project1.jpg', title: 'Project 1' },
              { src: '/project2.jpg', title: 'Project 2' },
              { src: '/project3.jpg', title: 'Project 3' },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={600}
                  height={350}
                  className="rounded-lg mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-gray-600">
                  A brief description of the project.
                </p>
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
