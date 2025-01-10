import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TypingEffect from "./components/TypingEffect"; // For terminal effect only

function App() {
  const [showContent, setShowContent] = useState(false); // Controls when to show the main content
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      {!showContent ? (
        <TypingEffect onComplete={() => setShowContent(true)} />
      ) : (
        <>
          <Navbar onThemeToggle={toggleTheme} theme={theme} />
          <main>
            <About />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
