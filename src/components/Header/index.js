"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import Model from "../Newsletter";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between bg-gradient-to-r from-white via-gray-100 to-white dark:from-dark dark:via-gray-800 dark:to-dark shadow-md">
      {/* Logo Section */}
      <Logo />

      {/* Hamburger Menu for Mobile */}
      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className={`absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-transform ease duration-200 ${
                click ? "rotate-[-45deg] translate-y-0" : "translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-opacity ease duration-200 ${
                click ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-transform ease duration-200 ${
                click ? "rotate-[45deg] translate-y-0" : "translate-y-[-6px]"
              }`}
            />
          </div>
        </div>
      </button>

      {/* Navigation Bar */}
      <div className="flex items-center justify-around w-full py-3 px-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
        <nav className="hidden sm:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-600 dark:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-indigo-600 dark:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-indigo-600 dark:text-white"
          >
            Contact
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-indigo-600 dark:text-white"
          >
            Services
          </Link>
        </nav>
        {/* Theme Switcher Button */}
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

      {/* Social Media Links and Button */}
      <div className="hidden sm:flex items-center space-x-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-lg text-lg text-white font-semibold transition-all ease-in-out"
        >
          Get My FREE EBOOK
        </button>
        {showModal && (
          <Model style={{ zIndex: 999 }} onClose={() => setShowModal(false)} />
        )}
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
      </div>
    </header>
  );
};

export default Header;
