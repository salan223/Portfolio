import React, { useState } from "react";
import TypingEffect from "./components/TypingEffect"; // Import TypingEffect from the components folder
import Navbar from "./components/Navbar"; // Import Navbar
import Hero from "./components/Hero"; // Import Hero
import Portfolio from "./components/Portfolio"; // Import Portfolio
import About from "./components/About"; // Import About
import Contact from "./components/Contact"; // Import Contact
import Footer from "./components/Footer"; // Import Footer
import "./css/Navbar.css"; // Import Navbar CSS
import "./css/TypingEffect.css"; // Import TypingEffect CSS
import "./css/Hero.css"; // Import Hero CSS
import "./css/Portfolio.css"; // Import Portfolio CSS
import "./css/About.css"; // Import About CSS
import "./css/Contact.css"; // Import Contact CSS
import "./css/Footer.css"; // Import Footer CSS

function App() {
  const [showHomepage, setShowHomepage] = useState(false);

  return (
    <div className="App">
      {/* Display TypingEffect first, then transition to the homepage */}
      {!showHomepage ? (
        <TypingEffect onComplete={() => setShowHomepage(true)} />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
