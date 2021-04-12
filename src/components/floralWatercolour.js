import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class FloralWatercolour extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/FloralWatercolour/FloralWatercolour_3.jpg"
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">
            Floral Watercolour
          </h1>
          <ProjectInfo
            year={data[14].date}
            type={data[14].type}
            tools={data[14].tools}
            role={data[14].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Floral Watercolour</h1>
                <p>Created using brush and watercolor</p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  Illustration made for wedding invitation cards in
                  collaboration with
                  <a
                    href="https://www.instagram.com/tinyrabbithole/?hl=en"
                    className="alert-link"
                  >
                    {" "}
                    Tiny Rabbit Hole
                  </a>{" "}
                  at Singapore.
                </p>
                <h3 className="pt-5 text-dark">Goal</h3>
                <p>
                  Watercolour illustration design for wedding invitation cards.
                </p>
              </div>
              <div class="col-md-6">
                <img
                  src="pics/projects/FloralWatercolour/FloralWatercolour_1.jpg"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div class="row equal">
              <div class="col-md-4 p-0">
                <img
                  src="pics/projects/FloralWatercolour/FloralWatercolour_2.jpg"
                  className="img-fluid w-100 h-100"
                />
              </div>
              <div className="col-md-4 p-0">
                <img
                  src="pics/projects/FloralWatercolour/FloralWatercolour_1.jpeg"
                  className="img-fluid h-50 w-100"
                />
                <img
                  src="pics/projects/FloralWatercolour/FloralWatercolour_2.jpeg"
                  className="img-fluid h-50 w-100"
                />
              </div>
              <div className="col-md-4 p-0">
                <img
                  src="pics/projects/FloralWatercolour/FloralWatercolour_3.jpeg"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col text-center pb-5 pt-5">
            <ScrollToTop />
          </div>
        </div>
      </motion.div>
    );
  }
}

export default FloralWatercolour;
