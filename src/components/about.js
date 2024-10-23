import React from "react";
import Nav from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

class About extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div>
          <div className="container-fluid pt-5 pb-5">
            <div className="row">
              <div className="col-md-6 pt-5">
                <img
                  src="pics/Yiyi.JPG"
                  className="w-100 img_fluid"
                  alt="Yiyi"
                />
                <div className="socialbtns text-center">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item p-1">
                      <a
                        href="https://github.com/Yiyis"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-inline-item p-1">
                      <a
                        href="https://www.linkedin.com/in/yiyishao/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-inline-item p-1">
                      <a
                        href="https://www.instagram.com/drunkcatthepluto/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="list-inline-item p-1">
                      <a href="mailto: yolandayiyishao@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 p-5 about">
                <h1 className="pt-5 text-light">About Me</h1>
                <p className="text-light">
                  Hi! I’m Yiyi, a developer with a background in design and
                  arts, originally from China and now based in downtown Toronto.
                  I enjoy working with a variety of programming tools and
                  digital media to turn complex problems into simple, effective
                  solutions. I’m passionate about creating visually appealing
                  and intuitive web applications that meet users’ needs.
                </p>
                <p className="text-light">
                  As a multi-disciplinary developer, I use my skills in digital
                  media, design, and programming to simplify challenges and
                  deliver creative solutions. My involvement in research
                  projects reflects my dedication to exploring innovative
                  approaches and contributing to the advancement of knowledge in
                  my field.
                </p>
                <p className="text-light">
                  When I’m not coding, I’m a devoted dog mom who loves outdoor
                  adventures like rock climbing, diving, hiking, and camping.
                  I’m also a certified PADI Open Water Diver and AIDA 2
                  Freediver.
                </p>
                <h1 className="text-light pt-5">Exhibits, Talks & Workshops</h1>
                <p className="text-light">
                  <b>IUW</b> 2018 Speaker <br />
                  <b>DF Openshow</b> 2018, 2019 Exhibitor
                  <br />
                  <b>Dames Making Games & Social Body Lab</b> 2018, 2019, 2020
                  Workshop instructor <br />
                  <b>WTF – What the Futures?</b> 2019 Exhibitor
                  <br />
                  <b>LevelUp </b> 2019 Exhibitor <br />
                  <b>FITC </b> 2019 Exhibitor <br />
                  <b>GradEX </b> 2019 Exhibitor <br />
                  <b>Future Education Festival </b>2019 Exhibitor <br />
                  <b>VRTO</b> 2019 Workshop facilitator <br />
                  <b>DMG October Speaker Social</b> 2019 Speaker
                </p>
                <h1 className="text-light pt-5">Publications</h1>
                <p className="text-light">
                  Shao, Yiyi, Nadine Lessio, and Alexis Morris. "IoT Avatars:
                  Mixed Reality Hybrid Objects for CoRe Ambient Intelligent
                  Environments."
                  <i>Procedia Computer Science </i> 155 (2019): 433-440.
                </p>
                <p className="text-light">
                  Kate Hartman, Chris Luginbuhl, Yiyi Shao, and Ricardo Toller
                  Correia. 2020. Encasing Computation: Using Digital Fabrication
                  Approaches to Make Microcontrollers Wearable. In Proceedings
                  of the Fourteenth International Conference on Tangible,
                  Embedded, and Embodied Interaction (TEI ’20). Association for
                  Computing Machinery, New York, NY, USA, 849–861.
                  DOI:https://doi.org/10.1145/3374920.3375004
                </p>
                <p className="text-light">
                  Guan, Jie, Nadine Lessio, Yiyi Shao, and Alexis Morris.
                  "Exploring a Mixed Reality Framework for the
                  Internet-of-Things: Toward Visualization and Interaction with
                  Hybrid Objects and Avatars." In 2020 IEEE Conference on
                  Virtual Reality and 3D User Interfaces Abstracts and Workshops
                  (VRW), pp. 858-858. IEEE, 2020.
                </p>
                <p className="text-light">
                  Morris, Alexis, Jie Guan, Nadine Lessio, and Yiyi Shao.
                  "Toward Mixed Reality Hybrid Objects with IoT Avatar Agents."
                  In 2020 IEEE International Conference on Systems, Man, and
                  Cybernetics (SMC), pp. 766-773. IEEE, 2020.
                </p>
                <p className="text-light">
                  Hartman, Kate, Emma Westecott, Izzie Colpitts-Campbell, Jennie
                  Robinson Faber, Yiyi Shao, Chris Luginbuhl, Olivia Prior, and
                  Manisha Laroia. "Textile Game Controllers: Exploring
                  Affordances of E-Textile Techniques as Applied to Alternative
                  Game Controllers." In Proceedings of the Fifteenth
                  International Conference on Tangible, Embedded, and Embodied
                  Interaction, pp. 1-14. 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default About;
