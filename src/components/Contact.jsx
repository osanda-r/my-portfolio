// src/components/Contact.jsx
import React from "react";
import { Mail, Linkedin, Github, Facebook, Twitter } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative z-10"
    >
      <div className="container mx-auto flex justify-center items-center min-h-[40vh]">
        <div className="bg-white/80 rounded-3xl shadow-2xl p-10 md:p-16 w-full max-w-2xl text-center border-2 border-blue-100">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-6 tracking-tight drop-shadow-lg">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mb-8 text-slate-700 text-md md:text-lg">
            Feel free to reach out via email or connect with me on social media!
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 md:gap-10 mt-4 flex-wrap">
            <a
              href="mailto:osandarashmitha8@gmail.com"
              className="group bg-blue-100 hover:bg-blue-200 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Email"
            >
              <Mail
                size={32}
                className="text-blue-600 group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/osandarashmitha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-100 hover:bg-blue-200 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={32}
                className="text-blue-700 group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://github.com/osanda-r"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-100 hover:bg-blue-200 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="GitHub"
            >
              <Github
                size={32}
                className="text-slate-800 group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://www.facebook.com/osanda.abeysinghe.5/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-100 hover:bg-blue-200 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Facebook"
            >
              <Facebook
                size={32}
                className="text-blue-800 group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://x.com/OsandaRashmitha"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-100 hover:bg-blue-200 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Twitter"
            >
              <Twitter
                size={32}
                className="text-blue-500 group-hover:animate-bounce"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
