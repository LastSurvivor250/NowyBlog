"use client";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";

import { useState } from "react";
import Model from "../Newsletter";
import SearchBar from "../SearchBar";
import Logo from "./Logo";
// Import SearchBar

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const [openMenu, setOpenMenu] = useState(null);

  const [searchQuery, setSearchQuery] = useState(""); // Stan zapytania wyszukiwania

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      // Przekierowanie do podstrony z wyszukiwaniem
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    } else {
      console.log("Wpisz coś, aby wyszukać.");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 border-b border-indigo-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Navigation Links */}
          <Logo />
          {/* <ul className="flex list-none space-x-4">
            <li>
              <a
                href="#"
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
          </ul> */}

          {/* SearchBar */}
          <div className="flex-grow flex justify-center">
            <SearchBar
              query={searchQuery}
              onChange={setSearchQuery} // Aktualizacja stanu `searchQuery`
              onSubmit={handleSearch} // Logika wyszukiwania
            />
          </div>

          {/* CTA Button */}
          <div className="ml-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#ffc107ca] hover:bg-[#FFC107] px-5 py-2 border-2 border-indigo-400 shadow-lg text-sm text-black font-semibold rounded-lg transition-transform transform hover:scale-105 ease-in-out"
            >
              Claim Your FREE Guide!
            </button>
          </div>
        </div>

        {/* Social Media and Theme Switcher */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={siteMetadata.linkedin}
            className="inline-block w-6 h-6 hover:scale-110 transition-transform ease duration-200"
            aria-label="LinkedIn"
            target="_blank"
          >
            <LinkedinIcon className="fill-current dark:fill-light" />
          </a>
          <a
            href={siteMetadata.twitter}
            className="inline-block w-6 h-6 hover:scale-110 transition-transform ease duration-200"
            aria-label="Twitter"
            target="_blank"
          >
            <TwitterIcon className="fill-current dark:fill-light" />
          </a>
          <a
            href={siteMetadata.github}
            className="inline-block w-6 h-6 hover:scale-110 transition-transform ease duration-200"
            aria-label="GitHub"
            target="_blank"
          >
            <GithubIcon className="fill-current dark:fill-light" />
          </a>
          <a
            href={siteMetadata.dribbble}
            className="inline-block w-6 h-6 hover:scale-110 transition-transform ease duration-200"
            aria-label="Dribbble"
            target="_blank"
          >
            <DribbbleIcon className="fill-current dark:fill-light" />
          </a>
          {/* Theme Switcher */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
              mode === "light"
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <MoonIcon className="fill-gray-800" />
            ) : (
              <SunIcon className="fill-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
