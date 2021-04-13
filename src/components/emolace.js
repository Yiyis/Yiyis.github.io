import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Emolace extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/Emolace/Emolace_L.jpg"
            alt="Emolace"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">Emolace</h1>
          <ProjectInfo
            year={data[9].date}
            type={data[9].type}
            tools={data[9].tools}
            role={data[9].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom-2 bg-icon">
            <div className="row">
              <div className="col-md-6">
                <h1>EmoLace</h1>
                <p>
                  Created using Particle photon, C++, REST API, RSSI, LEDs and
                  fabrics
                </p>
                <h3 className="pt-5 text-dark">Summary</h3>
                <p>
                  Ever wonder what other people are feeling right now? Emolace
                  is a fashion accessory reading emotional tweets from all over
                  the world. It changes colors depending on different hashtags
                  used. By tracking the sharing of the hashtags: #happy #sad #ew
                  #scared and #mad, Emolace tells the current emotion of the
                  ever-updating internet. The speed of blinking is based on the
                  strength of WiFi signal, which represents how well as an
                  individual is connected to the cyber world. Emolace
                  incorporates Particle Photon with IFTTT and powered by three
                  AA batteries. It is comfortable to wear and can be turned on
                  /off by a switch on the back. Its unisex design goes equally
                  well with a broad range of outfits.
                </p>
                <p className="pt-3">
                  Group members: Yiyi Shao, Jad Rabbaa, Quinn Rockliff
                </p>
                <p className="pt-3">
                  Full working diary can be found
                  <a
                    href="http://blog.ocad.ca/wordpress/digf6037-fw201702-01/2017/12/emolace/?doing_wp_cron=1560826141.0933818817138671875000"
                    className="alert-link"
                  >
                    {" "}
                    here
                  </a>
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/EmoLace/EmoLace_1.jpg"
                  className="img-fluid"
                  alt="emolace"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center">Objective</h3>
                <p className="pt-3">
                  Portables. Moveables. Wearables. Pocketables. Multiples. The
                  goal of this experiment is to create robust interactive
                  prototypes that we can make more than one of and that we want
                  to travel with us. We are responsible for producing 3 copies
                  of the prototype - 1 per person in the group. Each group
                  member will have (2) 6-hour experiences of the process of
                  taking our portable out into the field including self-testing,
                  repairing, journaling.
                </p>
                <h3 className="text-dark text-center pt-5">Action</h3>
                <img
                  src="pics/projects/EmoLace/Emolace_1.png"
                  className="img-fluid"
                  alt="arduino console"
                />
                <img
                  src="pics/projects/EmoLace/Emolace_2.png"
                  className="img-fluid"
                  alt="code"
                />
                <img
                  src="pics/projects/EmoLace/Emolace_3.png"
                  className="img-fluid"
                  alt="IFTTT"
                />
                <img
                  src="pics/projects/EmoLace/Emolace_4.png"
                  className="img-fluid"
                  alt="IFTTT console"
                />
                <img
                  src="pics/projects/EmoLace/Emolace_3.jpg"
                  className="img-fluid"
                  alt="Firtzing diagram"
                />
                <p>
                  <b>Emolace – User Testing Plan</b>
                </p>
                <p>Repair Kit</p>
                <ul>
                  <li>extra batteries</li>
                  <li>needle and thread</li>
                </ul>
                <p>
                  Our using testing plan is to test the 3 devices separately and
                  record our experiences through a form that will be answered
                  every 3 hours. Participants are encouraged to document moments
                  that stand out to them but try and do daily tasks and
                  functions they normally would.
                </p>
                <p className="text-dark pt-3">
                  <b>Short vlogs documenting experience.</b>
                </p>
                <p>
                  Testers will take short ten-fifteen second video logs
                  recording their experiences and concerns. This is for moments
                  that cannot be captured in the form.
                </p>
                <p className="text-dark pt-3">
                  <b>
                    Form to be answered every 3 hours. For a total of 4×3
                    responses.
                  </b>
                </p>
                <ul>
                  <li>How aware are you of the necklace?</li>
                  <li>Is it comfortable to wear?</li>
                  <li>Do you feel a connection to the changing colours?</li>
                  <li>
                    Does this connection affect how you feel about other events
                    in your life?
                  </li>
                  <li>
                    How does the reaction of other people impact your experience
                    with the device?
                  </li>
                  <li>What questions are they asking?</li>
                  <li>
                    Were you aware of the changing brightness of the LEDs, did
                    this make you aware of the spaces you were in?
                  </li>
                  <li>Additional comments obstacles experienced.</li>
                </ul>
                <div class="video-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    title="user testing"
                    src="https://www.youtube.com/embed/aQ7-3Egmzsw"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-dark text-center pt-5">Exhibits</h3>
                  <img
                    src="pics/projects/EmoLace/Emolace_7.jpg"
                    className="img-fluid"
                    alt="exhibition"
                  />
                  <figcaption className="figure-caption text-center">
                    <i>Creation & Computation Final Show</i>
                  </figcaption>
                  <figcaption className="figure-caption text-center">
                    Grad Gallery, OCAD University, December 2017
                  </figcaption>
                  <img
                    src="pics/projects/EmoLace/Emolace_5.JPG"
                    className="img-fluid"
                    alt="exhibition"
                  />
                  <img
                    src="pics/projects/EmoLace/Emolace_6.jpg"
                    className="img-fluid"
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
          </div>
          <div className="col text-center pb-5">
            <ScrollToTop />
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Emolace;
