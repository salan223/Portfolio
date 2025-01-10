import React, { useState, useEffect } from "react";
import "../css/About.css"; // Ensure the CSS file is linked correctly

const typingMessages = ["Salan", "Computer Engineer", "Passionate Coder"];

function About() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = typingMessages[messageIndex];
      if (!isDeleting) {
        setCurrentMessage((prev) => prev + currentText.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);

        if (typingIndex === currentText.length - 1) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        setCurrentMessage((prev) => prev.slice(0, -1));

        if (currentMessage === "") {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % typingMessages.length);
          setTypingIndex(0);
        }
      }
    };

    const typingInterval = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(typingInterval);
  }, [typingIndex, isDeleting, messageIndex, currentMessage]);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="profile-img"
            />
            <h2 className="profile-name">Richard Hanrick</h2>
            <p className="profile-title">Web Developer</p>
          </div>
          <div className="details">
            <ul>
              <li>
                <strong>Email:</strong> <span>richard@example.com</span>
              </li>
              <li>
                <strong>Phone:</strong> <span>+1 (213) 352-2795</span>
              </li>
              <li>
                <strong>Birthday:</strong> <span>June 23, 1982</span>
              </li>
              <li>
                <strong>Location:</strong> <span>Sacramento, California, USA</span>
              </li>
            </ul>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="content">
          {/* Typing Effect */}
          <div className="typing-effect text-2xl font-bold">
            I am{" "}
            <span className="highlight text-accent font-extrabold">
              {currentMessage}
            </span>
          </div>
          {/* About Section */}
          <div className="about-text mt-6">
            <h2>About Me</h2>
            <p>
              I'm a Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful, and intuitive designs.
            </p>
            <h3>What I'm Doing</h3>
            <div className="grid">
              <div className="grid-item">
                <h4>Web Design</h4>
                <p>
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
              <div className="grid-item">
                <h4>Web Development</h4>
                <p>
                  High-quality development of sites at the professional level.
                </p>
              </div>
              <div className="grid-item">
                <h4>Mobile Apps</h4>
                <p>
                  Professional development of applications for iOS and Android.
                </p>
              </div>
              <div className="grid-item">
                <h4>Photography</h4>
                <p>
                  I make high-quality photos of any category at a professional
                  level.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default About;
