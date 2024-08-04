import React, { useState } from "react";
import "./navBar.css";
import logo from "../../assets/po.png";
import "material-symbols";
import MobileNav from "./MobileNav/MobileNav";
import { HashLink as Link} from 'react-router-hash-link';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
              <Link to="#project" className="menu-item"> Projects </Link>
            </li>
            <li>
              <Link to="#certificate" className="menu-item"> Certifications </Link>
            </li>
            <li>
              <Link to="#contact" className="menu-item"> Contact Me </Link>
            </li>
            <button className="contact-btn" onClick={() => {
              window.open("https://drive.google.com/file/d/1KuzqP8Q77qKOYIDX1KLwvu5y1JrW3wtL/view?usp=sharing", "_blank");
            }}>
              Resume
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontsize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
