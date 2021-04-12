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
            alt="LovMeLovU pillows"
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
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>LovMeLovU</h1>
                <p>
                  Created using Particle photon, C++, REST API and 3D printing
                </p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  LuvMeLuvU is a set of two smart pillows designed for long
                  distance relationship. They can detect and send the user’s
                  missing to their caring one in any corner of the world. The
                  progress bar on the pillows can let them know how much they
                  currently miss each other. When both of the users are in the
                  same Missing Level, synced vibrations from two pillows will
                  get closer to their hearts. The luvMeLuvU pillows incorporated
                  Particle Photon, touch sensing with conductive threads, 3D
                  printing and other digital components.
                </p>
                <p className="pt-3">
                  Group members: Yiyi Shao, Jad Rabbaa, Sean Harkin
                </p>
                <p className="pt-3">
                  Full working diary can be found{" "}
                  <a
                    href="https://trello.com/b/af8zZWfd/luv-me-luv-u-3"
                    className="alert-link"
                  >
                    here
                  </a>
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/LovMeLovU/LovMeLovU_1.jpg"
                  className="img_fluid w-100"
                  alt="LovMeLovU"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                title="LovMeLovU"
                src="https://www.youtube.com/embed/fNibblmv9b8"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center pt-5">Objective</h3>
                <p className="pt-3">
                  This project is trying to present the idea of calm technology
                  and also finding a way to embed rigid hardware in a soft and
                  ubiquitous object in daily life by using Internet of Things
                  technology.
                </p>

                <h3 className="text-dark text-center pt-5">Action</h3>
                <p className="pt-3">
                  Each photon board connected to one potentiometer sensor and
                  three LED. One potentiometer will control the other one's LED.
                  We set three range of values from potentiometer sensor, which
                  represents the three different levels.
                </p>
                <ul>
                  <li>Level 1: LED1 blinks</li>
                  <li>Level 2: LED1 LED2 blinks</li>
                  <li>Level 3: LED1 LED2 LED3 blinks</li>
                </ul>
                <img
                  src="pics/projects/LovMeLovU/LovMeLovU_2.JPG"
                  className="img_fluid w-100"
                  alt="process"
                />
                <img
                  src="pics/projects/LovMeLovU/LovMeLovU_3.JPG"
                  className="img_fluid w-100"
                  alt="particle photon IDE"
                />

                <h3 className="text-dark text-center pt-5">Exhibits</h3>
                <img
                  src="pics/projects/LovMeLovU/LovMeLovU_4.JPG"
                  className="img_fluid w-100"
                  alt="exhibition"
                />
                <figcaption className="figure-caption text-center">
                  <i>DF Open Show</i>
                </figcaption>
                <figcaption className="figure-caption text-center">
                  OCAD University, February 2018
                </figcaption>
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

export default Lovemeloveyou;
