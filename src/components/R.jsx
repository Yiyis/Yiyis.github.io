import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class R extends React.Component {
  render() {
    return (
      <div className="cover-container d-flex full-screen-height">
        <Nav displayLogo={true} />
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className="img-container">
            <img
              className="project-main img-fluid cover"
              src="pics/projects/R/R.png"
              alt="Image of the Wordpress website"
            />
            <div className="img-overlay"></div>
            <h1 className="project-title text-center text-white">
              Wordpress Development
            </h1>
            <ProjectInfo
              year={data[22].date}
              type={data[22].type}
              tools={data[22].tools}
              role={data[22].role}
            />
          </div>
          <div id="content">
            <div className="container-fluid p-custom">
              <div className="row">
                <div className="col-md-6">
                  <h1>Wordpress Development</h1>
                  <p className="pt-3">
                    As a developer at Art & Science, I led the development of a
                    new website for Revera Inc., a company that manages
                    senior-living real estate assets. This project involved
                    building the site from the ground up, focusing on creating a
                    small-scale, brochure-style website to effectively
                    communicate the company’s services and values. I worked
                    closely with the UX/UI designer throughout the process, from
                    initial framework planning to the final deliverable,
                    ensuring the site was visually appealing, user-friendly, and
                    aligned with Revera Inc.'s brand identity and goals.
                  </p>
                  <h3 className="pt-5 text-dark">Platform stack: </h3>
                  <ul>
                    <li>Frontend: Elementor, CSS</li>
                    <li>Backend: Wordpress </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src="pics/projects/R/R_Mockups_2.png"
                    className="img_fluid w-100"
                    alt="Wordpress Site mockup"
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-green">
              <h3 className="pt-5 text-dark text-center">
                <a
                  href="https://www.embark.ca"
                  className="alert-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </h3>
              <img
                src="pics/projects/R/RShowcase.jpg"
                className="img_fluid w-100"
                alt="Headless wordpress development showcase"
              />
              <div className="col text-center pb-5 pt-5">
                <ScrollToTop />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default R;
