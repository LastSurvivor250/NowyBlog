"use client";

import siteMetadata from "@/src/utils/siteMetaData";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";

import { useState } from "react";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import SearchBar from "../SearchBar";
import Logo from "./Logo";
// Import SearchBar

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [openMenu, setOpenMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const toggleMenu = (menu) => {
    // If the same menu is clicked, close it; otherwise, open the clicked menu
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      // Redirect to the search page
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    } else {
      console.log("Please enter something to search.");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 border-b border-indigo-500">
      <div className="container py-8">
        <div className="flex items-center justify-between relative">
          {/* Hamburger Menu for Mobile */}
          <button
            className="inline-block sm:hidden z-50 ml-4"
            onClick={() => toggleMenu("menu1")}
            aria-label="Hamburger Menu"
          >
            <div className="w-6 cursor-pointer transition-all ease duration-300">
              <div className="relative">
                <span
                  className={`absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-transform ease duration-200 ${
                    openMenu === "menu1"
                      ? "rotate-[-45deg] translate-y-0"
                      : "translate-y-[6px]"
                  }`}
                />
                <span
                  className={`absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-opacity ease duration-200 ${
                    openMenu === "menu1" ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-transform ease duration-200 ${
                    openMenu === "menu1"
                      ? "rotate-[45deg] translate-y-0"
                      : "translate-y-[-6px]"
                  }`}
                />
              </div>
            </div>
          </button>

          {/* Logo */}
          <div className="absolute left-4 sm:left-[164px]">
            <Logo />
          </div>

          {/* SearchBar */}
          <div className="hidden sm:flex absolute inset-x-1/2 transform -translate-x-1/2 justify-center">
            <SearchBar
              query={searchQuery}
              onChange={setSearchQuery}
              onSubmit={handleSearch}
            />
          </div>

          {/* Social Media and Theme Switcher */}
          <div className="absolute right-4 sm:right-[229px] flex items-center space-x-2">
            {/* Social Media Icons */}
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
      </div>
    </nav>
  );
};

export default Navbar;
