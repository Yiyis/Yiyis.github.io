import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Pollhuetion extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/PollHUEtion/PollHUEtion_L.jpg"
            alt="PullHuetion"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">PollHUEtion</h1>
          <ProjectInfo
            year={data[7].date}
            type={data[7].type}
            tools={data[7].tools}
            role={data[7].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>PollHUEtion</h1>
                <p>Created using Arduino, C, and Adobe Illustrator</p>
                <h3 className="text-dark pt-5">Summary</h3>
                <p>
                  An installation perceived data from YYZ airport departures,
                  controlling three hairdryers to melt crayons by Arduino and
                  p5.js.
                </p>
                <p className="pt-3">
                  Group members: Yiyi Shao, Feng Yuan, Jad Rabbaa
                </p>
                <h3 className="text-dark pt-5">Objective</h3>
                <p>
                  We aim to turn pollutions into a piece of artwork and to
                  promote this message to people who travel a lot to do more in
                  daily life to set off their carbon prints.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/PollHUEtion/PollHUEtion.JPG"
                  className="img_fluid w-100"
                  alt="installation"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                title="Pullhuetion"
                src="https://www.youtube.com/embed/SAt5dJFj4co"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center pt-5 pb-3">Action</h3>
                <img
                  src="pics/projects/PollHUEtion/PollHUEtion_1.JPG"
                  className="img_fluid w-100"
                  alt="development"
                />
                <p className="pt-5 pb-3">
                  <b>The problems we faced:</b>
                </p>
                <p></p>
                <p>
                  1. Design an ending for reading the data. Since we currently
                  using a manually json data which only contain 2~3 hours flight
                  datas, we decide a ending for reading the data which will let
                  us and the audience know “here is the ending of the datas.”
                  Using the below function to know the length of the data array.
                  This callback function will only run at the first time the
                  json file be read.
                </p>
                <p>
                  2. Read the json from server. Our original plan was putting
                  the json file in webspace server. However, on the day we did
                  the final testing, the server we used was block for some
                  system maintain issues( not sure ). Then we decided to create
                  a js file (DATA.js) to storage all the json datas.
                </p>
                <p>
                  3. Send Data: It’s time to connect p5.js to arduino, we used a
                  bridge called p5.serialcontrol to send data to serial port so
                  arduino can read it and write to relevant pins. At the
                  beginning, p5.js just read from the json file and send outbyte
                  to serial port. We sense that will give us trouble so we
                  simply compared the data within p5.js and directly send four
                  numbers to arduino. We tested it when reading json file that
                  been put on webspace, which works perfectly fine.
                </p>
                <p className="pt-3">
                  But after we decided to work on local data file we faced some
                  weird problems. When reconnecting the p5.js to arduino,
                  suddenly it’s just not working. We spent a whole afternoon
                  troubleshooting. Initially we thought it’s the problem from
                  p5.js after we wrote some new code to read Data.js as arrays,
                  so we console log out all the number and data types and found
                  there shouldn’t be an issue. Then we commented out all the
                  data but just sent a simple “1” to the serial port in the draw
                  function, interestingly arduino couldn't even read that simple
                  command. So we found an example code from p5.serialcontrol
                  that we know which will definitely work to test with arduino.
                  And…. it works. So we replaced both the arduino code and p5.js
                  code to test with ours to see which part is causing problem.
                  Then we found that probably the differences between
                  digitalwrite and analogwrite in arduino, which obviously make
                  no sense. However, it did only work in analogwrite for some
                  reason. We re-started our laptop and took a deep breath and
                  hope everything become normal. And… it still doesn’t work.
                  Another one hour past, here we come the magical moment, we
                  used another usb cable for arduino board, everything turned
                  out to work! Hallelujah! What a typical day to dealing with
                  digital components.
                </p>
              </div>
            </div>
          </div>
          <div className="col text-center pb-5">
            <ScrollToTop />
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Pollhuetion;
