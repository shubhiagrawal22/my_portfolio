import React from "react";
import "./character.css";
import { ReactTyped } from "react-typed";
import reactI from '../../assets/React-icon.png';
import girl from '../../assets/unnamed.jpg';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import api from '../../assets/api.png';


const Character = () => {
  return (
    <section className="char-container" id="home">
      <div className="char-content">
        <h2>Hi, I'm Shubhi</h2>
        <p>
          and I'm a passionate 
          <span>{" "}
            <ReactTyped
              strings={[
                "Software Developer",
                "Fullstack Developer",
                "Frontend Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </p>
      </div>
      <div className="char-img">
        <div>
          <div>
            <div className="tech-icon" style={{marginBottom : "2rem"}}>
              <img src={reactI} alt="" />
            </div>
            <div className="tech-icon">
            <img src={api} alt="" />
            </div>
          </div>
          <img className="girl" src={girl} alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={html} alt="" />
          </div>
          <div className="tech-icon">
            <img src={css} alt="" />
          </div>
          <div className="tech-icon">
            <img src={js} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Character;
