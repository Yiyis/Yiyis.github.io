import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Moongaze extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/MoonGaze/MoonGaze_L.jpg"
            alt="MoonGaze"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">MoonGaze</h1>
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
                <h1>MoonGaze</h1>
                <p>Created using Arduino IDE, C, Feather M0 and PubNub</p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  A wearable interactive partner finder. A project by Yiyi Shao
                  and Finlay Braithwaite for DIGF6037, Creation and Computation,
                  Digital Futures, OCAD University.
                </p>
                <p>
                  My responsibilities: concept developing, designning, physical
                  making
                </p>
                <p>
                  Full report can be found{" "}
                  <a
                    href="http://blog.ocad.ca/wordpress/digf6037-fw201702-01/2017/11/moon-gaze/"
                    className="alert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/MoonGaze/MoonGaze_1.jpg"
                  className="img_fluid w-100"
                  alt="moongaze weared on people"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center">Objective</h3>
                <p className="pt-3">
                  人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟
                  — 苏轼 《水调歌头》
                </p>
                <p className="pt-3">
                  Translation: The moon does wax, the moon does wane, and so men
                  meet and say goodbye. May we all be blessed with longevity
                  though far apart, we are still able to share the beauty of the
                  moon together.
                </p>
                <p className="pt-3">
                  Our idea inspired by an old well-known Chinese poem Shui Diao
                  Ge Tou by Shi Su (also known as Tungpo Su, 1037 – 1101). This
                  poem describes the poet himself traveling long distances and
                  missing his family. The moon is a comfort to him because no
                  matter how far people are separated, they are still watching
                  and sharing the beauty of the same moon. Chinese people still
                  carry on this tradition as part of the Mid Autumn Festival.
                  Moon gaze is a contemporary take on this desire for long
                  distance connectedness through facing one another. With Moon
                  Gaze, one can find, face, and connect with their partner
                  irregardless of physical distance.
                </p>
                <h3 className="text-dark text-center pt-5">Action</h3>
                <p className="pt-3">
                  We choose to hack knit sweaters for our project, as they allow
                  us to weave a string of LEDs into the knit itself. We went to
                  Uniqlo to find suitable sweaters. In the men’s clothing
                  section we found dark grey knits that perfectly mimic the dark
                  night sky, a perfect backdrop for our moons.
                </p>
                <img
                  src="pics/projects/MoonGaze/MoonGaze_2.jpg"
                  className="img_fluid w-100 pt-3"
                  alt="LED assembling"
                />
                <img
                  src="pics/projects/MoonGaze/MoonGaze_3.jpg"
                  className="img_fluid w-100"
                  alt="Feathers assembling"
                />
                <img
                  src="pics/projects/MoonGaze/MoonGaze_4.jpg"
                  className="img_fluid w-100"
                  alt="final sweaters"
                />

                <h3 className="text-dark text-center pt-5 pb-3">Exhibits</h3>
                <img
                  src="pics/projects/MoonGaze/MoonGaze.JPG"
                  className="img_fluid w-100"
                  alt="exhibition"
                />
                <figcaption className="figure-caption text-center">
                  <i>DF Open Show</i>
                </figcaption>
                <figcaption className="figure-caption text-center">
                  Grad Gallery, OCAD University, February 2019
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

export default Moongaze;
