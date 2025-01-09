"use client";

import { useState } from "react";
import Model from "../Newsletter";
import SearchBar from "../SearchBar";
// Import SearchBar

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const [openMenu, setOpenMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Stan zapytania wyszukiwania

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Wyszukano:", searchQuery);

    // Logika wyszukiwania (np. przeszukanie DOM lub filtrowanie danych)
    // Poniżej przykład wyszukiwania w elementach HTML
    const elements = document.querySelectorAll("*");
    elements.forEach((el) => {
      if (el.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
        el.style.backgroundColor = "yellow"; // Podświetlenie znalezionego tekstu
      } else {
        el.style.backgroundColor = ""; // Resetowanie stylu
      }
    });
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 border-b border-indigo-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Navigation Links */}
          <ul className="flex list-none space-x-4">
            <li>
              <a
                href="#"
                onClick={() => toggleMenu("menu1")}
                className="no-underline text-white font-medium text-sm px-3 py-1.5 rounded-md transition duration-300 hover:bg-indigo-600"
              >
                Categories by Niche
              </a>
            </li>
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
          </ul>

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

        {/* Modal */}
        {showModal && (
          <Model style={{ zIndex: 999 }} onClose={() => setShowModal(false)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
