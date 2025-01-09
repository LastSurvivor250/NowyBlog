"use client";

import { useState } from "react";
import Model from "../Newsletter";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const [openMenu, setOpenMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = (menu) => {
    // If the same menu is clicked, close it; otherwise, open the clicked menu
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 border-b border-indigo-300">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-10">
          {/* Left Links */}
          <div className="flex items-center space-x-4 text-white">
            <a
              href="#"
              className="hover:text-gray-100 text-sm font-medium transition duration-300"
            >
              Categories by Niche
            </a>
            <a
              href="#"
              className="hover:text-gray-100 text-sm font-medium transition duration-300"
            >
              Trending
            </a>
            <a
              href="#"
              className="hover:text-gray-100 text-sm font-medium transition duration-300"
            >
              Resources
            </a>
            <a
              href="#"
              className="hover:text-gray-100 text-sm font-medium transition duration-300"
            >
              Case Studies
            </a>
          </div>
          {/* Call to Action */}
          <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-sm py-1.5 px-4 rounded-lg shadow transition-transform transform hover:scale-105">
            Claim Your FREE Guide!
          </button>
        </div>
      </div>

      {/* Lower Bar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/path-to-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-semibold">FocusedPatterns</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-indigo-400 transition duration-300 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition duration-300 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition duration-300 text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition duration-300 text-sm font-medium"
            >
              Services
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-dribbble"></i>
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition duration-300"
            >
              <i className="fas fa-cog"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
