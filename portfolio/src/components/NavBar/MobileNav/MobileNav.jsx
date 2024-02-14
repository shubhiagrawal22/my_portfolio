import React from "react";
import "./MobileNav.css";
import logo from "../../../assets/S-logos_transparent.png";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={logo} alt="" />
          <ul>
            <li>
              <a href="/" className="menu-item">Home</a>
            </li>
            <li>
              <a href="/" className="menu-item">Skills</a>
            </li>
            <li>
              <a href="/" className="menu-item">Work Experience</a>
            </li>
            <li>
              <a href="/" className="menu-item">Certifications</a>
            </li>
            <li>
              <a href="/" className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
                Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
