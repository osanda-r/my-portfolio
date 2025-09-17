// src/components/Skills.jsx
import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaVuejs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiC } from "react-icons/si";

// Optionally, you can add icons for each skill for more interactivity
const skillData = [
  {
    name: "Java",
    color: "bg-yellow-100",
    icon: <FaJava className="text-[#f89820]" />,
  },
  {
    name: "Python",
    color: "bg-green-100",
    icon: <FaPython className="text-[#3776ab]" />,
  },
  { name: "C", color: "bg-blue-100", icon: <SiC className="text-[#00599c]" /> },
  {
    name: "React.js",
    color: "bg-cyan-100",
    icon: <FaReact className="text-[#61dafb]" />,
  },
  {
    name: "Next.js",
    color: "bg-gray-100",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    name: "Vue.js",
    color: "bg-green-200",
    icon: <FaVuejs className="text-[#42b883]" />,
  },
  {
    name: "MySQL",
    color: "bg-blue-200",
    icon: <FaDatabase className="text-[#00758f]" />,
  },
  {
    name: "PHP",
    color: "bg-indigo-100",
    icon: <FaPhp className="text-[#777bb4]" />,
  },
  {
    name: "JavaScript",
    color: "bg-yellow-200",
    icon: <FaJs className="text-[#f7df1e]" />,
  },
  {
    name: "Tailwind CSS",
    color: "bg-teal-100",
    icon: <SiTailwindcss className="text-[#38bdf8]" />,
  },
  {
    name: "HTML",
    color: "bg-orange-100",
    icon: <FaHtml5 className="text-[#e34f26]" />,
  },
  {
    name: "CSS",
    color: "bg-blue-50",
    icon: <FaCss3Alt className="text-[#1572b6]" />,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 min-h-[60vh] bg-gradient-to-br from-slate-50 to-slate-200"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-slate-800 font-extrabold text-center mb-10 tracking-tight drop-shadow-lg">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
          {skillData.map((skill, idx) => (
            <div
              key={idx}
              className={`group ${skill.color} rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-blue-400`}
            >
              <span className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:rotate-6">
                {skill.icon}
              </span>
              <span className="text-md md:text-lg font-semibold text-slate-700 group-hover:text-blue-700 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
