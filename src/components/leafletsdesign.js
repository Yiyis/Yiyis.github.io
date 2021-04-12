import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class LeafletsDesign extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/Leaflets/Trifold_Leaflet.jpg"
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">
            Leaflets Design
          </h1>
          <ProjectInfo
            year={data[13].date}
            type={data[13].type}
            tools={data[13].tools}
            role={data[13].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Leaflet Design</h1>
                <p>Created using Adobe Illustrator, Adobe Photoshop</p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  Leaflet design for Care Leavers Service at Plymouth University
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/Leaflets/Trifold_Leaflet_2.jpg"
                  className="img_fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <img
              src="pics/projects/Leaflets/Trifold_Leaflet_3.jpg"
              className="img_fluid w-100"
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

export default LeafletsDesign;
