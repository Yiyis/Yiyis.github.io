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
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>
          <ProjectInfo
            year={data[11].date}
            type={data[11].type}
            tools={data[11].tools}
            role={data[11].role}
          />
        </div>
        <div id="content"></div>
        <div className="col text-center pb-5">
          <ScrollToTop />
        </div>
      </motion.div>
    );
  }
}

export default ScholarshipPromotion;
