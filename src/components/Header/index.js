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

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
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

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-light text-light rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2 text-light2">
          Home
        </Link>
        <Link href="/about" className="mx-2 text-light2">
          About
        </Link>
        <Link href="/contact" className="mx-2 text-light2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

     <nav class="fixed top-6 right-1/2 translate-x-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 p-3 px-6 sm:px-8 rounded-full text-white font-medium capitalize items-center hidden sm:flex z-50 transition-all ease duration-300">
  <Link href="/" className="mr-4">Home</Link>
  <Link href="/about" className="mx-4">About</Link>
  <Link href="/contact" className="mx-4">Contact</Link>
  <Link href="/" className="mx-4">Services</Link>
  <Link href="/" className="ml-4">More</Link>
  <button onClick={() => setMode(mode === "light" ? "dark" : "light")} class="w-6 h-6 ml-2 rounded-full flex items-center justify-center focus:outline-none">
    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M5.67 4.39l1.76 1.76c1.28-1.56 3.26-2.67 5.23-2.67 2.14 0 4.01 1.11 5.23 2.67l1.76-1.76L19.08 7.11a1 1 0 0 1 0 1.41L14.33 12l4.75 4.75a1 1 0 0 1 0 1.41l-1.41 1.41A11.5 11.5 0 0 1 12 18c-3.87 0-7.17-1.91-9.26-4.74L2.92 11.7a1 1 0 0 1 0-1.41L5.67 4.39z" {mode === "light" ? "fill-dark" : "fill-white"} />
    </svg>
  </button>
</nav>


      <div className=" hidden sm:flex items-center">
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
