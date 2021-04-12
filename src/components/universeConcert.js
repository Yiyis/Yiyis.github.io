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
            src="pics/projects/UniverseConcert/UniverseConcert_L.JPG"
            alt="Universe Concert"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">
            Universe Concert
          </h1>
          <ProjectInfo
            year={data[17].date}
            type={data[17].type}
            tools={data[17].tools}
            role={data[17].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Universe Concert</h1>
                <p>Created using Unity3D, Socket.IO and Adobe Photoshop</p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p className="pt-3">
                  Hello dreamers! Have you ever wondered what the galaxy smells
                  like and tastes like? Even sounds like? Have you ever dreamed
                  of being a star in the galaxy? The answers are all in the
                  small cup And even more exciting, may we invite you to get
                  your smartphone and enter wray.pro/Galaxy from your browser.
                  you can control your own star by holding it and turning
                  around. Today we are going to make your dream come true, enjoy
                  –Intro
                </p>
                <p className="pt-3">
                  This is a multi-sensory performance which took place at the
                  Immersive Vision Theatre (Dome). People are invited to use
                  their mobile phone to interact with the dome theatre by
                  turning into a star in the universe. After entering the URL,
                  the audiences can control their own star and make a unique
                  beautiful sound, which will eventually become a concert. At
                  the same time, raspberry rum jelly shots were served to make
                  the multisensory experience because scientific research shows
                  that the center of Milky Way smells like raspberry and taste
                  like rum.
                </p>
                <p className="pt-3">
                  Group members: Sam Wray (2XAA) and Yiyi shao
                </p>
              </div>
              <div className="col-md-6 ">
                <img
                  src="pics/projects/UniverseConcert/UniverseConcert_1.png"
                  className="img_fluid w-100"
                  alt="Universe concert"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <h3 className="text-dark pt-5 pb-3">Color palette</h3>
                <img
                  src="pics/projects/UniverseConcert/UniverseConcert_2.png"
                  className="img_fluid w-100"
                />
                <h3 className="text-dark pt-5 pb-3">Shaders</h3>
                <img
                  src="pics/projects/UniverseConcert/UniverseConcert_3.png"
                  className="img_fluid w-100"
                />
                <img
                  src="pics/projects/UniverseConcert/UniverseConcert.gif"
                  className="img_fluid w-30"
                />
              </div>
            </div>
          </div>
          <div className="col text-center pt-5 pb-5">
            <ScrollToTop />
          </div>
        </div>
      </motion.div>
    );
  }
}

export default FloralWatercolour;
