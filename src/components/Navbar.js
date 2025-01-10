import React, { useState } from "react";

function Navbar({ setActiveSection, onThemeToggle }) {
  const [activeTab, setActiveTab] = useState("about");

  // Handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActiveSection(tabName);
  };

  return (
    <nav className="navbar flex justify-between items-center p-4 bg-gray-900 dark:bg-gray-900 text-white shadow-md transition-colors">
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
        onClick={onThemeToggle}
        className="theme-toggle p-2 rounded-full bg-gray-700 text-white hover:bg-yellow-500 transition"
      >
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;
