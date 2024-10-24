import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Successfully Completed</h5>
      <h2>Projects</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Sentiment Ananlysis</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Built using Azure API for real-time sentiment analysis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployed on Google Cloud for scalability and reliability.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrated seamlessly with existing platforms.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Easy to identify positive, negative & neutral sentiments.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>CI/CD Pipeline Automation Project</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Automated CI/CD processes for efficient software delivery.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilized Jenkins, GitHub Actions, Azure DevOps and AWS.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Detailed monitoring and logging implemented.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensured consistent, reliable deployments.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>BAJA Vehicle Chassis & CVT Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designed a robust chassis for a BAJA vehicle.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Simulated performance using cutting-edge software.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilized industry standards for all design processes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Used AutoCAD and Solidwork to achieve</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
