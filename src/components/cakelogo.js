import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class CakeLogo extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/CakeLogo/mockup.jpg"
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">
            Cake Logo Design
          </h1>
          <ProjectInfo
            year={data[15].date}
            type={data[15].type}
            tools={data[15].tools}
            role={data[15].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Cake Logo Design</h1>
                <p>
                  Created using Adobe Illustrator, Adobe Photoshop and
                  watercolour
                </p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  Bluebell Confectionery logo is designed in a retro and elegant
                  style with perferred elements such as roses and leaves. It was
                  hand-drawn with watercolour and then scanned and transferred
                  into a vector format. The logo can be used as stickers,
                  packages, social medias, business cards, shop sign and so on.
                </p>
                <p className="pt-3">
                  All copyright of this logo belongs to Bluebell Confectionery.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/CakeLogo/Logo1.jpg"
                  className="img_fluid w-100"
                />
              </div>
              <div className="col-12 p-0">
                <img
                  src="pics/projects/CakeLogo/sketches.jpg"
                  className="img_fluid w-100"
                />
              </div>
              <div className="col text-center pb-5 pt-5">
                <ScrollToTop />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default CakeLogo;
