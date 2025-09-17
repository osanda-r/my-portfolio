// src/components/Hero.jsx

import React from "react";
import my from "../images/my.PNG";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-16 md:py-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Profile Image - circular, shadow, border, hover effect */}
        <img
          src={my}
          alt="Your Photo"
          className="mx-auto mb-6 w-56 h-56 md:w-72 md:h-72 rounded-full shadow-xl border-4 border-white object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Name Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-2 tracking-tight drop-shadow-lg">
          Hi, I’m <span className="text-blue-600">Osanda Abeysinghe</span>
        </h1>
        {/* Subtitle */}
        <h2 className="text-lg md:text-2xl text-slate-600 font-medium mb-6">
          Software Engineering Undergraduate
        </h2>

        {/* Description Paragraphs */}
        <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto mb-2">
          Passionate about solving real-world problems through innovative
          technology. My interests span software development, web/mobile apps,
          database design, IoT, data science, and QA.
        </p>
        <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto mb-6">
          Hands-on experience in front-end, Java-based mobile apps, IoT, and
          UI/UX. I focus on building intuitive, user-friendly, and scalable
          digital solutions. I love exploring new coding techniques, staying
          updated, and pushing creative boundaries.
        </p>

        {/* Call to Action Button */}
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 text-lg mt-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
