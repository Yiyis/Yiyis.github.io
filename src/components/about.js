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
                      <a href="https://github.com/Yiyis">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-inline-item p-1">
                      <a href="https://www.linkedin.com/in/yiyishao/">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-inline-item p-1">
                      <a href="https://www.instagram.com/drunkcatthepluto/">
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
                  Hello! My name is Yiyi. I am a developer with a background in
                  design and arts. I am originally from China and now living in
                  downtown Toronto. I am capable of working with a wide range of
                  programming tools and digital media to make complex problems
                  into simple solutions. I love building appealing and intuitive
                  web apps that reflect users’ needs.
                </p>
                <p className="text-light">
                  A bubbly and amiable character, I love spending time making
                  handicrafts and turning my apartment into a forest.
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
