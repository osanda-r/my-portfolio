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
          I'm Osanda Abeysinghe, a Software Engineering undergraduate at the
          Open University of Sri Lanka, driven by a desire to solve real-world
          problems through innovative technology. I thrive on learning new
          coding techniques and exploring the latest in software development,
          UI/UX design, and mobile applications.
        </p>
        <br />
        {/* Secondary Paragraph */}
        <p className="text-base md:text-md lg:text-lg text-slate-800 leading-relaxed">
          With a strong foundation in front-end development, Java-based mobile
          applications, and UI/UX design, I craft intuitive digital experiences
          that blend functionality with aesthetics. Whether it's designing
          seamless interfaces or writing efficient, scalable code, I'm always
          eager to push boundaries and turn ideas into reality.
        </p>
      </div>
    </section>
  );
}

export default Hero;
