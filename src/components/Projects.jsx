// src/components/Projects.jsx
import React from "react";
import pro1 from "../images/pro1.png";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.png";
import pro4 from "../images/pro4.png";
import pro5 from "../images/pro5.png";
import pro6 from "../images/pro6.png";
import pro7 from "../images/pro7.png";
import pro8 from "../images/pro8.png";
import github_pro from "../images/github_pro.png";

function Projects() {
  
  const projects = [
    {
      title: "Smart Parcel Delivery System",
      description:
        " logistics management application to automate parcel scheduling and routing.",
      image: github_pro,
      url: "https://github.com/osanda-r/Smart-Parcel-Delivery-System/tree/main/DeliverySystem/src/main/java/com/logistics/delivery",
    },
    {
      title: "Smart Parking Management System",
      description:
        "IoT-based Smart Parking Management System that automates parking operations,improves space utilization, reduces congestion, and enhances user convenience.",
      image: github_pro,
      url: "https://github.com/osanda-r/SmartParkingSystem",
    },

    {
      title: "Artify",
      description:
        "ARTIFY Website is a full stack project that connects artisans with consumers, creates an inclusive marketplace for unique handmade products, and supports the growth of artisans globally.",
      image: github_pro,
      url: "https://github.com/Roshan-Sandaruwan/Artisan-Marketplace",
    },

    {
      title: "Virtual Mouse",
      description:
        "AI-driven Virtual Mouse system that allows you to control your computer just with hand gestures – no physical mouse required.",
      image: github_pro,
      url: "https://github.com/osanda-r/virtualMouse/blob/main/main.py",
    },

  
    {
      title: "EduCheck",
      description:
        "A mobile app to track attendance.You can download it from here.",
      image: pro1,
      url: "https://drive.google.com/drive/folders/1AO8XJ7CL6xa9YKgHBEK22ZbIGk8AFT3_?usp=sharing",
    },
    {
      title: "Recipe Finder",
      description: "A web app to find recipes.",
      image: pro2,
      url: "https://github.com/osanda-r/Recipe-Finder",
    },
    {
      title: "Hotel Management System",
      description: "A web app to manage hotel.",
      image: pro3,
      url: "https://github.com/osanda-r/Hotel-Booking-System",
    },
    {
      title: "Student Management System",
      description: "A web app to manage student data.",
      image: pro4,
      url: "https://github.com/osanda-r/Student-management-system/tree/main/Student%20Management",
    },
    {
      title: "Weather App",
      description: "A web app to check weather.",
      image: pro5,
      url: "https://github.com/osanda-r/Weather-App",
    },
    {
      title: "Calculator",
      description: "A web app to perform calculations.",
      image: pro6,
      url: "https://github.com/osanda-r/Calculator",
    },
    {
      title: "Fitness Forge",
      description: "UI/UX design for a fitness website.",
      image: pro7,
      url: "https://drive.google.com/drive/folders/1ZcSQXvqqGKfdTuDNUQDkNnEAmqBAzuSV?usp=sharing",
    },
    {
      title: "Estate",
      description: "Real estate website. for Home buyers.",
      image: pro8,
      url: "",
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-700 mb-8">
          Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
              />

              {/* Project Details */}
              <div className="p-4">
                <h3 className="text-md md:text-lg font-semibold mb-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-950 transition"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-700 text-base md:text-md">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
