import React from "react";

function Footer({ theme }) {
  return (
    <footer
      className={`footer p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } transition-colors`}
    >
      <div className="text-center">
        &copy; {new Date().getFullYear()} Salan's Portfolio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
