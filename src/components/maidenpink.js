import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Maidenpink extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/MaidenPink/MaidenPink_L.jpg"
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">MaidenPink</h1>
          <ProjectInfo
            year={data[3].date}
            type={data[3].type}
            tools={data[3].tools}
            role={data[3].role}
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

export default Maidenpink;
