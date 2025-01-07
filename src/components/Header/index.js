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
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between  border-b border-gray-300 bg-white dark:bg-dark shadow-sm">
      <Logo />

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

      <nav className="w-full py-4 px-6 sm:px-8 border-b border-gray-300 bg-white shadow-sm text-gray-700 font-medium capitalize flex items-center justify-center">
        <Link href="/" className="mx-4 hover:text-black transition-colors">
          Home
        </Link>
        <Link href="/about" className="mx-4 hover:text-black transition-colors">
          About
        </Link>
        <Link
          href="/contact"
          className="mx-4 hover:text-black transition-colors"
        >
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "ml-4 p-2 rounded-full border border-gray-300 hover:border-black transition-all",
            mode === "light" ? "bg-gray-100 text-black" : "bg-black text-white"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className="fill-black w-5 h-5" />
          ) : (
            <SunIcon className="fill-white w-5 h-5" />
          )}
        </button>
      </nav>

      <div className=" hidden sm:flex items-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-500 hover:bg-indigo-100 px-4 py-2 rounded-xl text-lg mr-4 text-white font-semibold"
        >
          {" "}
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
          <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
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
