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
    <nav className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 border-b border-indigo-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Navigation Links */}
          <ul className="flex list-none space-x-4">
            <li className="relative group">
              <a
                href="#"
                onClick={() => toggleMenu("menu1")}
                className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
              >
                Categories by Niche
              </a>
              {openMenu === "menu1" && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/about">MENTAL HEALTH</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/about">Online Business</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/about">Self Development</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/about">Material Science</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                onClick={() => toggleMenu("menu2")}
                className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
              >
                Store
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="ml-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-black hover:bg-[#FFC107] px-5 py-2 border-2 border-indigo-400 shadow-lg text-sm text-indigo-400 font-semibold rounded-lg transition-transform transform hover:scale-105 ease-in-out"
            >
              Claim Your FREE Guide!
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <Model style={{ zIndex: 999 }} onClose={() => setShowModal(false)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
