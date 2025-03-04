// src/components/Contact.jsx
import React from "react";
import { Mail, Linkedin, Github, Facebook, Twitter } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-xl md:text-2xl text-slate-700 font-bold mb-8">
          Contact
        </h2>
        <p className="mb-4 text-slate-700 text-md md:text-lg">
          Feel free to reach out to me via email or connect with me on social
          media.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 md:space-x-6 mt-4 flex-wrap">
          {/* Email Icon */}
          <a
            href="mailto:osandarashmitha8@gmail.com"
            className="text-slate-600 hover:text-slate-950 transition"
          >
            <Mail size={30} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/osandarashmitha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-950 transition"
          >
            <Linkedin size={30} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/osanda-r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-950 transition"
          >
            <Github size={30} />
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/osanda.abeysinghe.5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-950 transition"
          >
            <Facebook size={30} />
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/OsandaRashmitha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-950 transition"
          >
            <Twitter size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
