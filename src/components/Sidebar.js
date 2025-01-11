import React from "react";
import "../css/Sidebar.css"; // Ensure you create this CSS file for styling

function Sidebar() {
  return (
    <aside className="sidebar fixed-left">
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
  );
}

export default Sidebar;
