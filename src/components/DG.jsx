import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class DG extends React.Component {
  render() {
    return (
      <div className="cover-container d-flex full-screen-height">
        <Nav displayLogo={true} />
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className="img-container">
            <img
              className="project-main img-fluid cover"
              src="pics/projects/DG/DG_bg.jpg"
              alt="Image of Dog Guides website"
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
                    As a developer at Art & Science, I had the opportunity to
                    work on a meaningful project for the Lions Foundation of
                    Canada Dog Guides. My role involved developing a WordPress
                    site from scratch, collaborating closely with a UX/UI
                    designer, project manager, and full stack developer across
                    multiple sprints. Lions Foundation of Canada Dog Guides is a
                    non-profit organization dedicated to breeding, rearing, and
                    training Dog Guides, with each guide costing $35,000 to
                    train and place. Relying solely on donations without
                    government funding, the website was designed to provide
                    clear information about their various programs and featured
                    a robust donation system to support their cause.
                  </p>
                  <h3 className="pt-5 text-dark">Platform stack: </h3>
                  <ul>
                    <li>Frontend: Tailwind</li>
                    <li>Backend: Wordpress </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src="pics/projects/DG/DG_mocukups.jpg"
                    className="img_fluid w-100"
                    alt="Wordpress Site mockup display"
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-beige">
              <h3 className="pt-5 text-dark text-center">
                <a
                  href="https://www.dogguides.com/"
                  className="alert-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </h3>
              <img
                src="pics/projects/DG/DGShowcase.jpg"
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

export default DG;
