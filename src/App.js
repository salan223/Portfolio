import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume"; // Import the Resume component
import TypingEffect from "./components/TypingEffect"; // For terminal effect only

function App() {
  const [theme, setTheme] = useState("dark");
  const [showContent, setShowContent] = useState(false);
  const [currentSection, setCurrentSection] = useState("about"); // Default to "About"

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

  // Dynamically render the selected section
  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "portfolio":
        return <div>Portfolio Section (Coming Soon!)</div>;
      case "blog":
        return <div>Blog Section (Coming Soon!)</div>;
      case "contact":
        return <div>Contact Section (Coming Soon!)</div>;
      default:
        return <About />;
    }
  };

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      {!showContent ? (
        <TypingEffect onComplete={() => setShowContent(true)} />
      ) : (
        <>
          <Navbar
            toggleTheme={toggleTheme}
            theme={theme}
            onSelectSection={setCurrentSection} // Pass handler to Navbar
          />
          <main style={{ marginLeft: "0px" }}> {/* Offset for Sidebar */}
            {renderSection()} {/* Render the selected section */}
          </main>
          <Footer theme={theme} />
        </>
      )}
    </div>
  );
}

export default App;
