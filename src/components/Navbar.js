import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons

function Navbar({ setActiveSection, onThemeToggle }) {
  const [activeTab, setActiveTab] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Detect current theme and toggle icon accordingly
  useEffect(() => {
    const theme = document.documentElement.classList.contains("dark");
    setIsDarkMode(theme);
  }, []);

  // Handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActiveSection(tabName);
  };

  // Handle theme toggle
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    onThemeToggle();
  };

  return (
    <nav
      className={`navbar flex justify-between items-center p-4 transition-colors ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
      } shadow-md`}
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
            className={`cursor-pointer px-4 py-2 rounded-md transition ${
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
        onClick={handleThemeToggle}
        className="theme-toggle p-2 rounded-full flex items-center justify-center transition bg-gray-700 text-white hover:bg-yellow-500 dark:bg-gray-300 dark:text-gray-800"
      >
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
}

export default Navbar;
