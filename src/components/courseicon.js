import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class CourseIcon extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/CourseIcon/CourseIcon_2.png"
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>

          <ProjectInfo
            year={data[12].date}
            type={data[12].type}
            tools={data[12].tools}
            role={data[12].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>Online Course Icon Design</h1>
                <p>Created using Adobe Illustrator, InDesign and PhotoShop</p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  Icon and visual design for Plymouth University online course
                  on iTunes U:{" "}
                  <a
                    href="https://itunes.apple.com/ca/course/ios-development-in-swift/id950659946"
                    className="alert-link"
                  >
                    iOS Development in Swift
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://itunes.apple.com/ca/course/digital-electronics-vhdl/id848429948"
                    className="alert-link"
                  >
                    Digital Electronics & VHDL
                  </a>
                </p>
                <h3 className="pt-5 text-dark">Goal</h3>
                <p>
                  Design a new icon/cover for the online course (Swift
                  development and VHDL development) around the course content
                  within the university's branding to attract more users.
                </p>
              </div>
              <div className="col-md-6 p-0">
                <img
                  src="pics/projects/CourseIcon/CourseIcon_1.jpg"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid p-custom-2 bg-icon">
            <div className="row">
              <div className="col-md-6">
                <h3 className="pt-5 text-dark">Outcome</h3>
                <p>
                  Visual design for the icons and other promotional materials
                  such as banner and flyers.
                </p>
                <h3 className="pt-5 text-dark">Results</h3>
                <p>
                  Online courses with the new design were featured on the font
                  page with siginificant traffics and downloads.
                </p>
              </div>
              <div class="col-md-6 p-0">
                <img
                  src="pics/projects/CourseIcon/CourseIcon_3.jpg"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid bg-icon bg-icon2">
            <div className="row">
              <div class="col-6 p-0">
                <img
                  src="pics/projects/CourseIcon/CourseIcon_flyer.jpg"
                  className="img-fluid w-100"
                />
                <img
                  src="pics/projects/CourseIcon/CourseIcon_flyer_2.jpg"
                  className="img-fluid w-100"
                />
              </div>
              <div className="col-6 p-0">
                <img
                  src="pics/projects/CourseIcon/CourseIcon_banner.jpg"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col text-center pt-5 pb-5">
              <ScrollToTop />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default CourseIcon;
