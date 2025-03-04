// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-4 md:py-6 text-center rounded-md">
      <div className="container mx-auto">
        <p className="text-sm md:text-md">
          &copy; {new Date().getFullYear()} Osanda Abeysinghe. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
