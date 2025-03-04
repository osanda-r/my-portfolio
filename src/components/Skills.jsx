// src/components/Skills.jsx
import React from "react";

function Skills() {
  const skills = [
    "React",
    "Java",
    "Python",
    "MySQL",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "HTML",
    "CSS",
  ];

  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl text-slate-700 font-bold text-center mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-100 text-md md:text-lg rounded-lg px-4 py-2 md:px-6 md:py-3 shadow-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
