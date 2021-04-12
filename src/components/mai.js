import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Mai extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/Mai/Mai_L.jpg"
            alt="Mai"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">Mai</h1>
          <ProjectInfo
            year={data[10].date}
            type={data[10].type}
            tools={data[10].tools}
            role={data[10].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Mai</h1>
                <p>
                  Created using Unity3D, Blender3D, Adobe Photoshop, projector,
                  Arduino, LED, capactive and proximity sensors.
                </p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  Mai is an interactive art installation focusing on the theme
                  of the environmental issue particularly air pollution in
                  China. The visualization in Mai is inspired by traditional
                  Chinese watercolour and projected onto a bamboo canvas showing
                  the daily average of air pollution index between 2012 to 2015
                  in Shanghai. There were a lantern and a bottle of the plant
                  placed in front of the visualization, which corresponding with
                  the audience's touch and distance to the installation with
                  sound and light. Past data of air pollution is not a waste
                  that people will gradually forget but can be changed into
                  things of value and aesthetical and hopefully help to raise
                  awareness of environmental protection.
                </p>
                <h3 className="pt-5 text-dark">Objective</h3>
                <p>
                  PM2.5 is believed to be the main pollution causing the haze
                  problem. Particles lower than or equal to 10 micrometers in
                  diameter are so small that they can invade the lungs and
                  potentially cause serious health problems. Ten micrometers is
                  smaller than the width of a strand of human hair. Coarse dust
                  particles (PM10) are 2.5 to 10 micrometers in diameter. When
                  PM2.5 becomes higher on a particular day, the ink in the
                  painting will become darker and mountains from distances will
                  transform into shadows resembling smokes. When Pm2.5 lowers on
                  a particular day, the ink will become lighter.I am trying to
                  raise awareness of environmental protection by creating an
                  aesthetic and interactive artwork through this art
                  installation.
                </p>
                <p className="pt-3">
                  The mental pain comes from political covering and can be eased
                  though psychological adjustment to transform people’s thinking
                  or with a blind eye to the way of ostrich to escape. However
                  if the environment issues hails from a political covering, not
                  only is it a torture of human’s body but also the spirit.
                  Because this is an infringement of human rights, denying the
                  basic requirement of allowing a human to consume fresh air,
                  for the well-being of their body while living under the
                  jurisdiction of their trusted government, whom they paid taxes
                  to and pledge their loyalty to the nation. Even the government
                  still chose to prohibit some artists or media, “Haze Art” as a
                  trend is gradually helping to raise public awareness these
                  years. People begin to realize the serious problem of the
                  environment. Only when the awareness of mass has been raised,
                  the government will be forced to bow to public pressure and
                  reform the energy structure and eventually solve the problem
                  in the future.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/Mai/Mai_1.jpg"
                  alt="mai"
                  className="img_fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lX1cto1PdMw"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center pt-3 pb-5">
                  Visual Interaction Design
                </h3>
                <img
                  src="pics/projects/Mai/Mai_1.gif"
                  alt="visual design"
                  className="img_fluid w-100"
                />
                <p className="pt-3">
                  In-lieu with a fusion of Chinese calligraphy and arts, the ink
                  resembles smog and polluted air that created with scanner and
                  Photoshop. By visualizing particle matter in the air from 2012
                  in Shanghai, I want to show how smog influenced the
                  environment in China. The visualization is a scene I composed
                  in Unity3D that looping the XML data.
                </p>
                <p>
                  The lantern and a bottle of plant filled with water are
                  controlled by Arduino that having serial communications with
                  Unity3D.
                </p>
                <h3 className="text-dark text-center pt-5 pb-5">Exhibits</h3>
                <img
                  src="pics/projects/Mai/Mai_2.jpg"
                  alt="exhibition setup"
                  className="img_fluid w-100"
                />
                <img
                  src="pics/projects/Mai/Mai_3.jpg"
                  alt="exhibition setup"
                  className="img_fluid w-100"
                />
                <figcaption className="figure-caption text-center">
                  <i>Digital Arts & Technology Final Projects Show</i>
                </figcaption>
                <figcaption className="figure-caption text-center">
                  University of Plymouth, 2016
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

export default Mai;
