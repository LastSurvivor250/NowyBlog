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
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between border-b border-gray-300 bg-white dark:bg-dark shadow-sm">
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
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      {/* Navigation Bar */}
      <nav className="flex-grow hidden sm:flex items-center justify-between max-w-[1200px] mx-auto py-2 px-6 border border-gray-300 bg-white dark:bg-dark shadow-md rounded-md">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-black dark:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-black dark:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-black dark:text-gray-300"
          >
            Contact
          </Link>
        </div>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 flex items-center justify-center rounded-full p-1 ${
            mode === "light"
              ? "bg-gray-200 text-gray-800"
              : "bg-gray-800 text-gray-200"
          }`}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className="fill-gray-800" />
          ) : (
            <SunIcon className="fill-gray-200" />
          )}
        </button>
      </nav>

      {/* Social Media Links and Button */}
      <div className="hidden sm:flex items-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-500 hover:bg-indigo-100 px-4 py-2 rounded-xl text-lg mr-4 text-white font-semibold"
        >
          Get My FREE EBOOK
        </button>
        {showModal && (
          <Model style={{ zIndex: 999 }} onClose={() => setShowModal(false)} />
        )}
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.dribbble}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
