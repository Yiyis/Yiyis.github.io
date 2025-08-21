import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class EM extends React.Component {
  render() {
    return (
      <div className="cover-container d-flex full-screen-height">
        <Nav displayLogo={true} />
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className="img-container">
            <img
              className="project-main img-fluid cover"
              src="pics/projects/F/F_BG.jpg"
              alt="Image of Shopify Market Place"
            />
            <div className="img-overlay"></div>
            <h1 className="project-title text-center text-white">
              Headless Wordpress Development
            </h1>
            <ProjectInfo
              year={data[23].date}
              type={data[23].type}
              tools={data[23].tools}
              role={data[23].role}
            />
          </div>
          <div id="content">
            <div className="container-fluid p-custom">
              <div className="row">
                <div className="col-md-6">
                  <h1>Headless Wordpress Development</h1>
                  <p className="pt-3">
                    As a developer at Art & Science, I contributed to the
                    development of a new website for Farber Debt Solutions,
                    built from scratch using a headless WordPress setup. This
                    project aimed to provide a modern and efficient online
                    platform for their financial services, with a focus on
                    performance, user experience, and scalability. The website's
                    design and functionality helped enhance Farber’s digital
                    presence, and our efforts were recognized when the site won
                    the{" "}
                    <a
                      href="https://we-awards.com/winner/farber-realistic-debt-relief-solutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="alert-link"
                    >
                      Web Excellence Award
                    </a>{" "}
                    in the Financial Services category.
                  </p>
                  <h3 className="pt-5 text-dark">Platform stack: </h3>
                  <ul>
                    <li>Frontend: Nuxt3, Vue3, Tailwind</li>
                    <li>Backend: Wordpress </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src="pics/projects/F/F_mockup.jpg"
                    className="img_fluid w-100"
                    alt="VPIA"
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-green">
              <h3 className="pt-5 text-dark text-center">
                <a
                  href="https://www.farber.ca"
                  className="alert-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </h3>
              <img
                src="pics/projects/F/F_showcase.jpg"
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

export default EM;
