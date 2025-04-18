import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Vpia extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/VPIA/VPIA_L.jpg"
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">VPIA</h1>
          <ProjectInfo
            year={data[16].date}
            type={data[16].type}
            tools={data[16].tools}
            role={data[16].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Virtual Platform for Indigenous Arts</h1>
                <p className="pt-3">
                  This project was led by Dr. Gerald McMaster as part of the
                  larger Entangled Gaze project at OCAD University’s{" "}
                  <a
                    href="https://wapatah.com/"
                    className="alert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wapatah Centre for Indigenous Visual Knowledge
                  </a>
                  , the VPIA is designed to facilitate Indigenous access,
                  interpretation, and learning from artwork collections held by
                  museums and galleries around the world.
                </p>
                <p className="pt-3">
                  VPIA is a wiki-style platform that allows institutional
                  artwork records to be transformed into living documents
                  through the integration of Indigenous knowledge, language, and
                  protocols
                </p>
                <h3 className="pt-5 text-dark">Platfrom stack: </h3>
                <ul>
                  <li>
                    Back-end: NodeJS, ExpressJS, RESTful, MySQL and Caminte,
                    Progressive Web App (PWA)
                  </li>
                  <li>Front-end: React, Bootstrap and TinyMCE</li>
                  <li>Hosting: AWS, Nginx for reverse proxy</li>
                  <li>Linting tools: Prettier and ESlint</li>
                  <li>Bundling: Webpack</li>
                  <li>PRs testing: LGTM and TravisCI</li>
                  <li>DevOps: TravisCI and AWS Codeploy</li>
                </ul>
                <p className="pt-3">
                  Visit the plafrom{" "}
                  <a
                    href="https://vpia.wapatah.com"
                    className="alert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </p>
                <p className="pt-3">
                  <a
                    href="https://github.com/Wapatah/VPIA"
                    className="alert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github repository
                  </a>
                </p>
                <p className="pt-3">
                  <a
                    href="https://wapatah.com/virtual-platform-for-indigenous-art/"
                    className="alert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>{" "}
                  about the platform
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/VPIA/VPIA.jpg"
                  className="img_fluid w-100"
                  alt="VPIA"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid bg-green">
            <img
              src="pics/projects/VPIA/showcase.jpg"
              className="img_fluid w-100"
              alt="VPIA page showcase"
            />
            <div className="col text-center pb-5 pt-5">
              <ScrollToTop />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Vpia;
