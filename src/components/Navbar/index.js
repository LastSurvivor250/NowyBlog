"use client";

import { useState } from "react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    // If the same menu is clicked, close it; otherwise, open the clicked menu
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-indigo-500 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="thematic-nav bg-gray-200 py-2 text-center">
              <ul className="list-none ">
                <li className="inline-block mx-2">
                  <a
                    href="#"
                    onClick={() => toggleMenu("menu1")}
                    className="no-underline text-white font-bold px-5 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
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
                <li className="inline-block mx-2">
                  <a
                    href="#"
                    onClick={() => toggleMenu("menu2")}
                    className="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
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
                <li className="inline-block mx-2">
                  <a
                    href="#"
                    className="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Resources
                  </a>
                </li>
                <li className="inline-block mx-2">
                  <a
                    href="about"
                    className="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Case Studies
                  </a>
                </li>
                <li className="inline-block mx-2">
                  <a
                    href="#"
                    className="no-underline text-white font-bold px-7 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Community
                  </a>
                </li>
                <li className="inline-block mx-2">
                  <a
                    href="#"
                    className="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Courses
                  </a>
                </li>
                <li className="inline-block mx-2">
                  <a
                    href="#"
                    className="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
