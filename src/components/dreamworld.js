import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Dreamworld extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/DreamWorld/DreamWorld_L.jpg"
            alt="Dream World AR"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">
            Dreamworld AR
          </h1>
          <ProjectInfo
            year={data[2].date}
            type={data[2].type}
            tools={data[2].tools}
            role={data[2].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid bg-black p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-light">DreamWorld AR</h1>
                <p className="text-light">
                  Created for iPhones using Unity3D, ARFoundation, ARKit, XCode,
                  Adobe Illustrator, Adobe Photoshop
                </p>
                <h3 className="pt-5 text-light">Summary</h3>
                <p className="text-light">
                  DreamWorld AR is an experimental project exploring the
                  boundary between virtual and real worlds.
                </p>
                <h3 className="pt-5 text-light">Goal</h3>
                <p className="text-light">
                  Design an user-friendly interface for the AR app. Inspired by
                  Vishnu Ganti's UI/UX for hand-held AR and Tevfik Ufuk
                  DEMİRBAŞ's AR Portal.
                </p>
              </div>
              <div className="col-md-6">
                <div className="video-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    title="DreamWorld AR"
                    src="https://www.youtube.com/embed/_gRENmGkTjg"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-pink p-4">
            <div className="row">
              <div className="col-md-8 text-center">
                <h4>1.User Flow</h4>

                <img
                  src="pics/projects/DreamWorld/UserFlow.jpg"
                  className="img-fluid"
                  alt="user flow diagram"
                />

                <h4>2.Animation Design</h4>

                <img
                  src="pics/projects/DreamWorld/UI_2.gif"
                  className="img-fluid"
                  alt="UI animation"
                />
              </div>
              <div className="col-12 text-center pb-5">
                <ScrollToTop />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Dreamworld;
