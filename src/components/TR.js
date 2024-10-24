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
              src="pics/projects/TR/TR-BG.jpg"
              alt="Image of Shopify Market Place"
            />
            <div className="img-overlay"></div>
            <h1 className="project-title text-center text-white">
              Shopify Marketplace Development
            </h1>
            <ProjectInfo
              year={data[19].date}
              type={data[19].type}
              tools={data[19].tools}
              role={data[19].role}
            />
          </div>
          <div id="content">
            <div className="container-fluid p-custom">
              <div className="row">
                <div className="col-md-6">
                  <h1>Shopify Marketplace Development</h1>
                  <p className="pt-3">
                    As a developer at Art & Science, I had the privilege of
                    working on an exciting project for Tasty Ribbon's Shopify
                    store. My task was to develop a robust marketplace in
                    addition to their existing Shopify store. This project
                    involved implementing a range of functionalities, including
                    the ability to filter products by collection, providing
                    quick views and quick shopping options for products, adding
                    badges to highlight new and sale items, and enhancing the
                    product detail page for a more informative and engaging
                    shopping experience. By seamlessly integrating this
                    marketplace into Tasty Ribbon's existing setup, we aimed to
                    elevate their online presence and offer customers a seamless
                    and enjoyable shopping journey.
                  </p>
                  <h3 className="pt-5 text-dark">Platfrom stack: </h3>
                  <ul>
                    <li>Frontend: SCSS, JQuery</li>
                    <li>Backend: Shopify</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src="pics/projects/TR/TR_Mockups_2.jpg"
                    className="img_fluid w-100"
                    alt="VPIA"
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-beige">
              <h3 className="pt-5 text-dark text-center">
                <a
                  href="https://tastyribbon.com"
                  className="alert-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </h3>
              <img
                src="pics/projects/TR/Showcase.jpg"
                className="img_fluid w-100"
                alt="Shopify marketplace development showcase"
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
