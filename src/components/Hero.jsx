// src/components/Hero.jsx
import React from "react";
import my from "../images/my.PNG";

function Hero() {
  return (
    <section className="bg-slate-100 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Image Section */}
        <img
          src={my}
          alt="Your Photo"
          className="mx-auto mb-4 scale-80 md:scale-90 lg:scale-100 rounded-lg"
        />

        {/* Introductory Paragraph */}
        <p className="text-base md:text-md lg:text-lg text-slate-800 leading-relaxed">
          Hi, I’m Osanda Abeysinghe, a Software Engineering undergraduate at the
          Open University of Sri Lanka. I’m passionate about solving real-world
          problems through innovative technology. My interests span software
          development, web and mobile app development, database design, IoT
          systems, data science, and quality assurance.
        </p>
        <br />
        {/* Secondary Paragraph */}
        <p className="text-base md:text-md lg:text-lg text-slate-800 leading-relaxed">
          With hands-on experience in front-end development, Java-based mobile
          applications, IonT systems and UI/UX design, I focus on building intuitive,
          user-friendly, and scalable digital solutions. I enjoy exploring new
          coding techniques, staying updated with the latest trends, and pushing
          creative boundaries to transform ideas into impactful realities.
        </p>
      </div>
    </section>
  );
}

export default Hero;
