import React from "react";
import "../css/Resume.css";

function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-container">
        {/* Header Section */}
        <header className="resume-header">
          <h1 className="name">Richard Hanrick</h1>
          <p className="contact">
            (905) 111-0708 | richard@example.com | Toronto, ON |
            <a href="http://www.richardhanrick.com" target="_blank" rel="noreferrer">
              www.richardhanrick.com
            </a>
          </p>
        </header>

        {/* Education Section */}
        <div className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <h3>York University</h3>
            <p>
              <strong>Bachelors of Engineering</strong>, Spec. Hons. - Computer Engineering
            </p>
            <p>GPA: 7.65/9</p>
            <p>
              Courses: Advanced OOP, Data Structures and Algorithms, Computer Organization and
              Architecture, Embedded Systems, and more.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li><strong>Languages:</strong> Java, JavaScript, C, R, HTML/CSS, SQL, Verilog HDL, and more</li>
            <li><strong>Developer Tools:</strong> VS Code, IntelliJ, GitHub, Junit</li>
            <li><strong>Hardware:</strong> Microcontrollers, Amplifiers, Rectifiers</li>
            <li><strong>Others:</strong> Agile, Scrum, Microsoft Office Suite</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-item">
            <h3>Software Engineering Intern - BookTrades</h3>
            <p><em>May 2023 - Aug. 2023, Toronto, ON</em></p>
            <ul>
              <li>Developed a multi-platform app connecting tradespeople to homeowners.</li>
              <li>Implemented payment functionality using React and Django.</li>
              <li>Built messaging systems with Firebase Cloud Functions.</li>
            </ul>
          </div>
        </div>

        {/* Extracurricular Activities Section */}
        <div className="section">
          <h2 className="section-title">Extracurricular Activities</h2>
          <div className="activity-item">
            <h3>Frosh Week Leader - York University</h3>
            <p><em>Aug. 2022 - Sept. 2022, Toronto, ON</em></p>
            <p>Fostered teamwork and inclusion for new students during Frosh week.</p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-item">
            <h3>Automated Plant Watering System</h3>
            <p><strong>Technologies:</strong> Java, C, Arduino, IntelliJ</p>
            <p>Designed and developed a self-watering system using MOSFET sensors and Arduino Grove boards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
