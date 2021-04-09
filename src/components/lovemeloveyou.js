import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Lovemeloveyou extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/LovMeLovU/LovMeLovU_L.jpg"
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">LovMeLovU</h1>
          <ProjectInfo
            year={data[6].date}
            type={data[6].type}
            tools={data[6].tools}
            role={data[6].role}
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

export default Lovemeloveyou;
