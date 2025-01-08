import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar({ setActiveSection }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Save light mode preference
      setIsDarkMode(false);
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save dark mode preference
      setIsDarkMode(true);
    }
  };

  // On initial load, set the theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // Default to system preference if no preference is saved
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDarkMode) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    }
  }, []);

  return (
    <nav className="navbar flex justify-between items-center p-4 bg-gray-800 text-white dark:bg-gray-900">
      {/* Logo */}
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => setActiveSection("home")}
      >
        Salan's Portfolio
      </div>

      {/* Links */}
      <ul className="flex space-x-4">
        <li
          onClick={() => setActiveSection("home")}
          className="cursor-pointer hover:underline"
        >
          Home
        </li>
        <li
          onClick={() => setActiveSection("experience")}
          className="cursor-pointer hover:underline"
        >
          Experience
        </li>
        <li
          onClick={() => setActiveSection("projects")}
          className="cursor-pointer hover:underline"
        >
          Projects
        </li>
        <li
          onClick={() => setActiveSection("contact")}
          className="cursor-pointer hover:underline"
        >
          Contact
        </li>
      </ul>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-600 rounded-full hover:bg-gray-500"
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-blue-500" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
