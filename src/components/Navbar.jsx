// src/components/Navbar.jsx
import React, { useState } from "react";
import signature1 from "../images/signature1.png";
import { Menu } from "lucide-react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`p-4 md:p-6 text-slate-700 bg-slate-100 ${
        showMenu ? "h-40" : "h-0"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={signature1}
          alt="Logo"
          className="w-32 md:w-40 lg:w-48 h-10 md:h-12 lg:h-14 hover:scale-120 transition-transform duration-300 scale-110"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#skills"
            className="px-3 hover:text-slate-950 transition-transform duration-600"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-3 hover:text-slate-950 transition-transform duration-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-3 hover:text-slate-950 transition-transform duration-600"
          >
            Contact
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-end">
          <button
            className="bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-md"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <span>Close</span>
            ) : (
              <Menu size={24} className="text-slate-600" />
            )}
          </button>
          {showMenu && (
            <div className="absolute top-16 right-4 bg-slate-100 shadow-md p-4 w-40">
              <a
                href="#skills"
                className="block px-3 py-2 hover:text-slate-950 transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 hover:text-slate-950 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 hover:text-slate-950 transition"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
