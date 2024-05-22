import React from "react";
import "./Services.css";
import { BsFillBagCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="service">
      <h5>Services we provide</h5>
      <h2>Service</h2>

      <div className="container services__container grid grid-cols-1 md:grid-cols-2 gap-12">
        <article className="container h-auto">
          <div className="service">
            <div className="service__head">
              <h3>Frontend Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Creating user interfaces that work seamlessly on any device
                  size and resolution using responsive web design techniques.
                </p>
              </li>
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Designing interactive prototypes to visualize the user
                  experience and interface before the actual development.
                </p>
              </li>
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Utilizing frameworks like Tailwind CSS, Bootstrap, and
                  Materialize to expedite styling and ensure consistency across
                  the site.
                </p>
              </li>
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Implementing dynamic elements such as carousels, modals, and
                  accordions using JavaScript and libraries like React.js or
                  Vue.js.
                </p>
              </li>
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Ensuring that websites function correctly across different web
                  browsers and their various versions.
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="container h-auto">
          <div className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Building robust and scalable server-side logic using
                  technologies like Node.js, Express, Django, or Ruby on Rails.
                </p>
              </li>
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Connecting frontend applications with backend services through
                  RESTful or GraphQL APIs for data exchange and functionality.
                </p>
              </li>
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Designing and managing databases using SQL (MySQL, PostgreSQL)
                  or NoSQL (MongoDB, Firebase) solutions for efficient data
                  storage and retrieval.
                </p>
              </li>
              <li>
                <BsFillBagCheckFill className="service__list-icon" />
                <p>
                  Implementing security measures such as authentication,
                  authorization, data encryption, and protection against common
                  vulnerabilities. Setting up continuous integration/continuous deployment
                  (CI/CD) pipelines to automate the deployment.
                </p>
              </li>
            
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
