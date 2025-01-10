"use client";
import Link from "next/link";

import { useState } from "react";
import { cx } from "@/src/utils";
import Model from "../Newsletter";

const Header = () => {
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full h-16 relative flex items-center bg-gradient-to-r from-white via-gray-100 to-white dark:from-dark dark:via-gray-800 dark:to-dark shadow-md">
      {/* Hamburger Menu for Mobile */}
      <button
        className="inline-block sm:hidden z-50 ml-4"
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

      {/* Navigation - absolute positioning */}
      <nav className="hidden sm:flex items-center absolute left-[280px] space-x-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-indigo-600 dark:text-white"
        >
          Menu
        </Link>
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

      {/* CTA Button - absolute positioning */}
      <div className="absolute right-8">
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#ffc107ca] hover:bg-[#FFC107] px-5 py-2 border-2 border-indigo-400 shadow-lg text-sm text-black font-semibold rounded-lg transition-transform transform hover:scale-105 ease-in-out"
        >
          Claim Your FREE Guide!
        </button>
      </div>

      {showModal && (
        <Model style={{ zIndex: 999 }} onClose={() => setShowModal(false)} />
      )}
    </header>
  );
};

export default Header;
