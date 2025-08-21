import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class BS extends React.Component {
  render() {
    return (
      <div className="cover-container d-flex full-screen-height">
        <Nav displayLogo={true} />
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className="img-container">
            <img
              className="project-main img-fluid cover"
              src="pics/projects/BS/BS_bg.jpg"
              alt="Image of Shopify Market Place"
            />
            <div className="img-overlay"></div>
            <h1 className="project-title text-center text-white">
              Shopify Theme Development
            </h1>
            <ProjectInfo
              year={data[24].date}
              type={data[24].type}
              tools={data[24].tools}
              role={data[24].role}
            />
          </div>
          <div id="content">
            <div className="container-fluid p-custom">
              <div className="row">
                <div className="col-md-6">
                  <h1>Shopify Theme Development</h1>
                  <p className="pt-3">
                    As a developer at Art & Science, I worked on elevating the
                    e-commerce experience for Bradley Smoker using Shopify OS
                    2.0. This project involved development and customization
                    across both the Canadian and U.S. storefronts to ensure
                    consistency while addressing region-specific content and
                    requirements. I implemented extensive customizations for the
                    smoker and bisquette product pages, as well as their
                    respective collection pages—building tailored layouts and
                    reusable content blocks to showcase product features, usage
                    tips, and related items. A key component of the build was
                    the recipe section, which required deep customization to
                    support complex tagging, media integration, and product
                    cross-linking—enabling users to discover recipes and easily
                    navigate to the relevant smokers and bisquettes. These
                    enhancements helped deliver a more immersive, informative,
                    and localized shopping experience that aligned with Bradley
                    Smoker’s brand values.
                  </p>
                  <h3 className="pt-5 text-dark">Platfrom stack: </h3>
                  <ul>
                    <li>Frontend: SCSS, JQuery</li>
                    <li>Backend: Shopify</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src="pics/projects/BS/BS_mockup.jpg"
                    className="img_fluid w-100"
                    alt="Bradley Smoker shopify"
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-beige">
              <h3 className="pt-5 text-dark text-center">
                <a
                  href="https://www.bradleysmoker.com"
                  className="alert-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </h3>
              <img
                src="pics/projects/BS/BS_showcase.jpg"
                className="img_fluid w-100"
                alt="Shopify theme development showcase"
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

export default BS;
