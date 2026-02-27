import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 text-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">
            About Me
          </h2>
          <p className="text-gray-500">
            My journey as a developer and my professional background
          </p>
        </div>

        {/* Profile Box */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-8 mb-16">
          <div className="flex items-start gap-4">
            <MapPin className="text-rose-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold mb-2">Profile</h3>
              <p className="text-gray-700 leading-relaxed">
               I am a professional React developer with over four years of experience building modern, scalable, and highperformance web applications.
                My primary expertise is React, Next.js, TypeScript, and modern JavaScript(ES6+).
                I specialize in creating reusable UI components, managing complex frontend state using hooks and context,
                and optimizing performance for high-load applications.
                I have extensive experience working with REST APIs, backend integration (Node.js, Express), and databases
                such as PostgreSQL and MongoDB. I focus on clean architecture, maintainable code, and excellent user
                experience.
                I am passionate about building responsive, accessible, and production-ready scalable frontend systems
              </p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>

          <div className="space-y-10 border-l border-rose-200 pl-8">

            {/* Senior */}
            <div className="relative">
              
              <div className="flex justify-between">
                <h4 className="font-semibold">Senior Web Developer</h4>
                <span className="text-sm text-gray-500">
                  February 2025 - Present
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Developed responsive web applications using React, TypeScript,
HTML5, and CSS3.</li>
                <li>Integrated RESTful APIs across over 10 client-side platforms, increasing conversion rates by 25%.</li>
                <li>Led a team of 5 developers to build a scalable e-commerce platform using React and Node.js.</li>
                <li>Improved page load performance by 40% through optimization and
code splitting.</li>
              </ul>
            </div>

            {/* Web Developer */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Frontend Developer</h4>
                </div>
                <span className="text-sm text-gray-500">
                  March 2023 - February 2025
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Developed responsive user interfaces using React and Tailwind CSS for over 15 client-side applications.</li>
                <li>Improved mobile conversion rates by 35%.</li>
                <li>Optimized rendering performance using Next.js (SSR, lazy loading), reducing page load time by 50%</li>
                <li>Collaborated closely with designers using Figma to create perfectly crafted user interfaces.</li>
              </ul>
            </div>

            {/* Junior */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Full-Stack Developer</h4>
                </div>
                <span className="text-sm text-gray-500">
                  April 2021 - March 2023
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Created backend services using Express.js and PostgreSQL</li>
                <li>Implemented SaaS features that increased user retention by 45%.</li>
                <li>Integrated REST API and implemented database optimization strategies</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="border-l border-rose-200 pl-8 relative">
            
            <div className="flex justify-between">
              <div>
                <h4 className="font-semibold">
                 Shanghai Jiao Tong University
                </h4>
                <p className="text-sm text-gray-500">Shanghai, China</p>
              </div>
              <span className="text-sm text-gray-500">
                April 2017 - March 2021
              </span>
            </div>
            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Useful courses: Web Development, Data Structures, Algorithms, Software Engineering</li>
                <li>Certification Project: Developing a Fully Functional E-Commerce Application Using React, Node.js, and
MongoDB</li>
              </ul>
          </div>
        </div>

      </div>
    </section>
  );
}