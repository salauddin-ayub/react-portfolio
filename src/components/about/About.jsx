import React from "react";
import "./About.css";
import reactLogo from "../../assets/reLogo.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={reactLogo} alt="About Image" className="w-48 h-auto" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Contribute</h5>
              <small>2+ projects</small>
            </article>
          </div>
          <p>
          A self-motivated, committed and enthusiastic frontend developer who is passionate about building web applications in JavaScript (including React.js) and Python (django). Looking for an mid-level position as a Software Engineer in a dynamic firm that values my analytical and technical skills and provides scope for updating my knowledge, I seek a company that will help me contribute to its development.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's a talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
