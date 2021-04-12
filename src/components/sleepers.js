import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Sleepers extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/Sleepers/Sleepers_L.jpg"
            alt="Sleepers"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">Sleepers</h1>
          <ProjectInfo
            year={data[5].date}
            type={data[5].type}
            tools={data[5].tools}
            role={data[5].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Sleepers</h1>
                <p>
                  Created using Particle photon, REST API, IFTTT, C++ and Laser
                  cutting
                </p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  A experimental research project at{" "}
                  <a href="http://socialbodylab.com" className="alert-link">
                    Social Body Lab
                  </a>
                  . Sleepers are designed to keep the user from staying up too
                  late. It will send messages of “It’s time to go to bed”
                  continuously to the user after a preset time. Only when the
                  user goes to the bed and not wearing Sleepers, the user’s
                  phone will stop getting those messages.
                </p>
                <p className="pt-3">
                  Full report can be found{" "}
                  <a
                    href="http://socialbodylab.com/sleepers/"
                    className="alert-link"
                  >
                    here
                  </a>
                </p>
                <p className="pt-3">
                  This project was part of the Encasing Computation published on{" "}
                  <a
                    href="https://dl.acm.org/doi/abs/10.1145/3374920.3375004"
                    className="alert-link"
                  >
                    TEI
                  </a>
                </p>
              </div>
              <div className="col-md-6 ">
                <img
                  src="pics/projects/Sleepers/Sleepers_1.jpg"
                  className="img_fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center pb-3">Objective</h3>
                <ul>
                  <li>
                    Aesthetic: Aesthetic is the main goal of Sleepers, we try to
                    find a way to combine digital components into soft fabrics.
                    The appearance of sleepers wouldn’t remind any of the
                    electronics at the first impression as they are seamlessly
                    embedded within the interlayer of the fabrics. Sleepers are
                    minimalist design with just two pieces of white felts.
                    Geometric flower patterns are designed to go with the led on
                    particle photon on the top, to show if the slippers are
                    online and functional.
                  </li>
                  <li>
                    Comfort: Comfort is also another main goal when designing
                    Sleepers as slippers themselves are supposed to be cozy when
                    wearing at home, so comfortability and lightweight are the
                    crucial elements. As the fact that human feet are very
                    sensitive especially most people like to wear slippers with
                    bare feet so we developed the layering technique to work
                    with the rigid digital components.
                  </li>
                  <li>
                    Easy to use: Sleepers are very easy to use, the
                    functionality is very simple just to focusing on whether it
                    has been worn. The user can plug in the mini USB cable to
                    charge the battery when it’s out of power.
                  </li>
                </ul>
                <p>
                  However, there are some limitations and future improvements
                  for the Sleepers. The first one is the improvement for the
                  position of charging port, either to find a way to extend the
                  mini USB port or add an external led to replacing the onboard
                  RGB status LED. The second one is the improvement of the power
                  switch, it should be less electrical appearance.
                </p>
                <h3 className="text-dark text-center pt-5 pb-3">Action</h3>
                <img
                  src="pics/projects/Sleepers/Sleepers_2.jpg"
                  className="img_fluid w-100"
                />
                <img
                  src="pics/projects/Sleepers/Sleepers_3.jpg"
                  className="img_fluid w-100"
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

export default Sleepers;
