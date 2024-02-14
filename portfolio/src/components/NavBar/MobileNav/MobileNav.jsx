import React from "react";
import "./MobileNav.css";
import logo from "../../../assets/S-logos_transparent.png";
import { HashLink as Link } from "react-router-hash-link";

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
              <Link to="#home" className="menu-item"> Home </Link>
            </li>
            <li>
              <Link to="#skills" className="menu-item"> Skills </Link>
            </li>
            <li>
              <Link to="#work" className="menu-item"> Work Experience </Link>
            </li>
            <li>
              <Link to="#certificate" className="menu-item"> Certifications </Link>
            </li>
            <li>
              <Link to="#contact" className="menu-item"> Contact Me </Link>
            </li>
            <button className="contact-btn" onClick={() => {
              window.open("https://drive.google.com/file/d/1B3ahPTFiTzYwcqYq7CaVdSM2WZWF1qEM/view?usp=sharing", "_blank");
            }}>
              Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
