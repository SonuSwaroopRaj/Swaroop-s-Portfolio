import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiAward } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Highest Certification</h5>
              <small>Associate Cloud Engineer Certification </small><br></br>
              <small>From Google</small>
            </article>

            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Internships</h5>
              <small>3 completed Internships</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 completed Projects</small>
            </article>
          </div>

          <p>
          Cloud and DevOps Engineer with experience in CI/CD
          pipeline development, containerization, and cloud
          infrastructure management. Skilled in Python
          programming and committed to optimizing processes
          and enhancing efficiency. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
