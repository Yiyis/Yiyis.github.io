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
              src="pics/projects/EM/EM.jpg"
              alt="Image of the user browsing the Shopify Blog"
            />
            <div className="img-overlay"></div>
            <h1 className="project-title text-center text-white">
              Shopify Blog Development
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
                  <h1>Shopify Editorial Blog</h1>
                  <p className="pt-3">
                    As a developer at Art & Science, I had the opportunity of
                    crafting a dynamic blog platform for Ellie Mae's Shopify
                    store. This project involved creating an organized blog
                    landing page with categorized articles and pagination.
                    Additionally, I developed intricate editorial templates for
                    individual articles, granting Ellie Mae the flexibility to
                    seamlessly mix and match various media layouts and paragraph
                    styles, offering flexibility in content presentation. The
                    seamless integration of a blog section on the homepage
                    ensured a smooth user experience and encouraged engagement.
                    This endeavor not only enhanced Ellie Mae's online presence
                    but also showcased their content in an engaging and
                    user-friendly manner.
                  </p>
                  <h3 className="pt-5 text-dark">Platform stack: </h3>
                  <ul>
                    <li>Frontend: SCSS, JQuery, Vue, Gulp</li>
                    <li>Backend: Shopify</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src="pics/projects/EM/EM_Mockup.jpg"
                    className="img_fluid w-100"
                    alt="Shopify Editorial Blog
                      "
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-beige">
              <h3 className="pt-5 text-dark text-center">
                <a
                  href="https://www.elliemaestudios.com/"
                  className="alert-link"
                >
                  Visit Site
                </a>
              </h3>
              <img
                src="pics/projects/EM/showcase.jpg"
                className="img_fluid w-100"
                alt="VPIA page showcase"
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
