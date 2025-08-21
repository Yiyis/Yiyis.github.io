import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Thehats extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/TheHats/TheHats_L.jpg"
            alt="The hats"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">The hats</h1>
          <ProjectInfo
            year={data[4].date}
            type={data[4].type}
            tools={data[4].tools}
            role={data[4].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6">
                <h1>The Hats</h1>
                <p>
                  Created using Arduino IDE, Circuit playground, C, and LEDs
                </p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  The hats are the experiments of using Circuit Playground
                  board. They can detect sound, movement and touch. The Hats are
                  designed for women’s safeties when going home alone at
                  evening, but it can also be worn for fun.
                </p>
                <p>Group members: Yiyi Shao, Feng Yuan</p>
                <p>
                  My responsibilities: coding, physical making and video editing
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/TheHats/TheHats.jpg"
                  className="img_fluid w-100"
                  alt="The hats"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center pb-3">Objective</h3>
                <p>
                  The the final project, we choose to re-do our second project,
                  the tap-to-blink knitting hat. We choose to re-do this preview
                  project for the following reasons:
                </p>
                <ul>
                  <li>
                    In our previous project, we tried really hard to make the
                    circuit as small as possible. Ideally, the circuit of the
                    hat should be entirely hidden and all wires would not impact
                    on the comfortability. We hope we can polish this project to
                    complete our initial goal in our final one.
                  </li>
                  <li>
                    In the previous project, the microcontroller we chosen was
                    feather board. Even the feather board is small and light, it
                    is not a ideal choice for wearable device. In our final
                    project, we decided to move the whole circuit from feather
                    to playground which has all built-in sensors and leds and
                    accessible hooker for conductive thread.
                  </li>
                  <li>
                    In our third project, we added a haptic feedback driver to
                    our top-to-blink knitting hat. We also would like to
                    involved this haptic feedback into our final project. In
                    this way, we can involve the tests about haptic feedback
                    driver into this final one.
                  </li>
                </ul>
                <p className="pt-5 pb-3">
                  <b>Comfortability/Wearability:</b>
                </p>
                <p>
                  In our previous project, the pack of the circuit is kindly
                  huge. Even we sew the whole thing on the back of the hat, it
                  is still uncomfortable to wear. In the purpose of making the
                  whole circuit light, small, and at the same time stable, we
                  plan to use playground as the microcontroller. Since the
                  playground itself embedded multiple sensors and works well
                  with the conductive thread, it seems possible to create a
                  flexible and also reliable circuit with it on our hat.
                </p>
                <p className="pt-5 pb-3">
                  <b>Usability/Accessibility:</b>
                </p>
                <p>
                  In our second project, we used the self-made sensor to trigger
                  the leds. In the final one, we hope we can improve the
                  prototype. We will use a vibration motor to create a haptic
                  feedback. Since there are built-in sensors in circuit
                  playground, we will also use these sensors to make the change
                  of leds more diverse.
                </p>
                <p className="pt-5 pb-3">
                  <b>Design Influence:</b>
                </p>
                <ul>
                  <li>
                    Based on the shape/structure of the hat, we run the
                    conductive threads separately to make sure them won’t
                    touched.
                  </li>
                  <li>
                    We placed the led string in vertical so the hat won’t be
                    stiff and hard to wear.
                  </li>
                  <li>
                    We placed the circuit playground in the forehead to show the
                    neopixel.
                  </li>
                </ul>
                <h3 className="text-dark text-center pt-5 pb-3">Action</h3>
                <img
                  src="pics/projects/TheHats/TheHats_1.JPG"
                  className="img_fluid w-100"
                  alt="Making process"
                />
                <img
                  src="pics/projects/TheHats/TheHats_2.JPG"
                  className="img_fluid w-100"
                  alt="Making process"
                />
                <p className="pt-5 pb-3">
                  <b>Self-Evaluation:</b>
                </p>
                <p>
                  The most difficult part is to transform all of the digital
                  components from breadboard to the hat. We tried our best to
                  make the circuit as less as possible. From the beginning, we
                  decided to use the circuit playground with all sensors
                  embedded instead of Feather M0. Although we have planned all
                  of the positions for the rest of each part, we still messed up
                  the circuit a lot of times while assembling the hat using
                  conductive thread. The whole process is more like redo, redo
                  and redo all over again to try to find problems and solutions
                  to solve it. But I am really very happy with the final results
                  and enjoyed exploring most of the functions of circuit
                  playground board. Moreover, the main goals of our final
                  project have been achieved. Firstly, the goal of reducing the
                  weight to improve the wearability. Secondly, the goal of
                  trying to combine all interesting contents from previous
                  workshops. For the future development of this project, I think
                  there is a lot of potentials. I personally would like to wear
                  it as my daily outfit, specifically for meeting or
                  presentation as our initial design. I would like to see how
                  people react to my body language and comment about it to help
                  to improve the next iteration.
                </p>
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

export default Thehats;
