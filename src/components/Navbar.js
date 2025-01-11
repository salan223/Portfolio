import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ toggleTheme, theme, onSelectSection }) {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    onSelectSection(tabName); // Update the selected section in App.js
  };

  return (
    <nav
      className={`navbar flex justify-between items-center p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } shadow-md transition-colors`}
    >
      {/* Logo */}
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => handleTabClick("about")}
      >
        Salan's Portfolio
      </div>

      {/* Navbar Links */}
      <ul className="flex space-x-6">
        {["about", "resume", "portfolio", "blog", "contact"].map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer px-4 py-2 rounded-md ${
              activeTab === tab
                ? "bg-yellow-500 text-black font-bold"
                : "hover:text-yellow-500"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </li>
        ))}
      </ul>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`theme-toggle p-2 rounded-full ${
          theme === "dark" ? "bg-gray-700 text-white" : "bg-yellow-300 text-black"
        } hover:bg-yellow-500 transition flex items-center justify-center`}
      >
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
}

export default Navbar;
