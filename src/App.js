import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"; // Import Navbar
import Hero from "./components/Hero"; // Import Hero
import About from "./components/About"; // Import About
import Experience from "./components/Experience"; // Import Experience
import Projects from "./components/Projects"; // Import Projects
import Contact from "./components/Contact"; // Import Contact
import Footer from "./components/Footer"; // Import Footer
import TypingEffect from "./components/TypingEffect"; // Import TypingEffect

function App() {
  const [showContent, setShowContent] = useState(false); // Controls when to show the main content

  // Ensure the saved theme is applied before rendering content
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="App dark:bg-gray-900 dark:text-white text-gray-900 bg-gray-100">
      {/* Show TypingEffect first, then main content */}
      {!showContent ? (
        <TypingEffect onComplete={() => setShowContent(true)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
