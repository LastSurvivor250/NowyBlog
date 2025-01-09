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
      <div className="ml-auto max-w-7xl px-2 sm:pl-6 lg:pl-8">
        <div className="flex h-10 items-center justify-between">
          <div className="flex flex-1 items-center md:items-stretch md:justify-start">
            <div className="flex items-center justify-between w-full py-4 bg-gray-50 dark:bg-gray-900 rounded-lg ml-20  shadow-sm">
              <ul className="flex list-none space-x-4 mr-4 ">
                <li>
                  <a
                    href="#"
                    onClick={() => toggleMenu("menu1")}
                    className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
                  >
                    Categories by Niche
                  </a>
                  {openMenu === "menu1" && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
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
                  {openMenu === "menu2" && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                      <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="/about">ADHD</a>
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
                    className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="about"
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
              <div className=" ml-auto">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-[#FFD700] hover:bg-indigo-400 px-3 py-1 border-2 border-indigo-400 shadow-lg text-sm text-black font-semibold transition-all ease-in-out"
                >
                  Get My FREE EBOOK
                </button>
                {showModal && (
                  <Model
                    style={{ zIndex: 999 }}
                    onClose={() => setShowModal(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
