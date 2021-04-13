import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class ScholarshipPromotion extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/ScholarshipPromotion/ScholarshipPromotionPoster_3.jpg"
            alt="Scholarship Promotion"
          />
          <div className="img-overlay"></div>
          <ProjectInfo
            year={data[11].date}
            type={data[11].type}
            tools={data[11].tools}
            role={data[11].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Scholarship Promotion Design</h1>
                <p>Created using Adobe Illustrator, Adobe InDesign</p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  Poster and postcard design for Scholarship Promotion at
                  Plymouth University
                </p>
              </div>
              <div className="col-md-6 ">
                <img
                  src="pics/projects/ScholarshipPromotion/ScholarshipPromotion.png"
                  className="img_fluid w-100"
                  alt="poster design"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <img
              src="pics/projects/ScholarshipPromotion/ScholarshipPromotionPoster_2.jpg"
              className="img_medium"
              alt="poster display"
            />
            <img
              src="pics/projects/ScholarshipPromotion/ScholarshipPromotionPostcard_1.jpg"
              className="img_medium"
              alt="flyer display"
            />
            <img
              src="pics/projects/ScholarshipPromotion/ScholarshipPromotionPostcard_2.jpg"
              className="img_medium"
              alt="flyer display"
            />
          </div>
          <div className="col text-center pb-5">
            <ScrollToTop />
          </div>
        </div>
      </motion.div>
    );
  }
}

export default ScholarshipPromotion;
