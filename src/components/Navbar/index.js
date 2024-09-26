"use client";

import { useState } from "react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-indigo-500 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div class="thematic-nav bg-gray-200 py-2 text-center">
              <ul class="list-none ">
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    onClick={toggleMenu}
                    class="no-underline text-white font-bold px-5 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Categories by Niche
                  </a>
                  {isMenuOpen && (
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
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    onClick={toggleMenu}
                    class="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Trending
                  </a>
                  {isMenuOpen && (
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
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Resources
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="about"
                    class="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Case Studies
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-7 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Community
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Courses
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-7 py-1.5 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div class="thematic-nav bg-gray-200 py-2 text-center">
              <ul class="list-none ">
                <li class="inline-block mx-2">
                  <a
                    href="/about"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    IT
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    VIDEO
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    LINKS
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    STATUS
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    ENTERTAINMENT
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    FEEDBACK
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    PROJECTS
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
