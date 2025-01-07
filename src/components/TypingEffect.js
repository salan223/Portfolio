import React, { useState, useEffect, useMemo } from "react";

function TypingEffect({ onComplete }) {
  const [output, setOutput] = useState([]); // Store typed commands
  const [text, setText] = useState(""); // Current text being typed
  const [currentIndex, setCurrentIndex] = useState(0); // Current command index
  const [showCursor, setShowCursor] = useState(true); // Blinking cursor

  // Constant terminal prompt
  const terminalPrompt = "salanbhattarai@Salans-Portfolio ~ % ";

  // Use useMemo to ensure commands are not reinitialized on every render
  const commands = useMemo(
    () => [
        "./launch-salan-portfolio.sh",
        "export NODE_ENV=development",
        "npm install",
        "npm start",
        "echo '🌐 Portfolio live at http://localhost:3000'",
      ],
    []
  );

  // Typing effect logic
  useEffect(() => {
    if (currentIndex < commands.length) {
      const currentCommand = commands[currentIndex];
      if (text.length < currentCommand.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + currentCommand[text.length]);
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Add completed command to output and move to the next command
        const timeout = setTimeout(() => {
          setOutput((prev) => [...prev, `${terminalPrompt}${currentCommand}`]);
          setText(""); // Clear text for the next command
          setCurrentIndex((prev) => prev + 1);
        }, 1000); // Delay before starting the next command
        return () => clearTimeout(timeout);
      }
    } else {
      // Call onComplete after all commands are done
      const timeout = setTimeout(() => {
        if (onComplete) onComplete(); // Ensure onComplete exists before calling
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [text, currentIndex, commands, terminalPrompt, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-window">
        {/* Terminal Header */}
        <div className="terminal-header">
          <span className="circle red"></span>
          <span className="circle yellow"></span>
          <span className="circle green"></span>
        </div>
  
        {/* Terminal Content */}
        <div className="terminal-content">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          {currentIndex < commands.length && (
            <div>
              {terminalPrompt}
              {text}
              {showCursor && "|"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default TypingEffect;
