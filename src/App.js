import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import TypingEffect from "./components/TypingEffect"; // For terminal effect only

function App() {
  const [theme, setTheme] = useState("dark");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
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
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <main>
            <About />
          </main>
          <Footer theme={theme} />
        </>
      )}
    </div>
  );
}

export default App;
