import React from "react";
import ProjectInfo from "./projectInfo";
import data from "../assets/projectsData.json";

class Rabbot extends React.Component {
  render() {
    return (
      <div>
        <div className="img-container">
          <img
            className="project-main img-fluid"
            src="pics/projects/RABBOT/RABBOT_L.jpg"
            alt="RABBOT project as a whole"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">RABBOT</h1>
          <ProjectInfo
            year={data[0].date}
            type={data[0].type}
            tools={data[0].tools}
            role={data[0].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div id="projectnormal" className="col-md-4">
                <p>
                  RABBOT is a three-player AR/VR game, which allows people
                  inside of the VR to play with people outside of the VR.
                </p>
                <p>
                  Created for iPads, Andriod phones and Gear VR using Unity3D,
                  Node.js, Socket.IO, Particle API, OculusVR, Vuforia,
                  Blender3D, Adobe Illustrator, Particle Photon, 3D printing and
                  Laser cutting
                </p>
              </div>
              <div className="col-8 align-self-center">
                <img
                  src="pics/projects/RABBOT/RabbotShowcase.png"
                  alt="RABBOT project showcase"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="container-fluid pt-4" id="IntroMain">
            <div id="HeadsetTop">
              <img
                src="pics/projects/RABBOT/HeadsetFrame.png"
                alt="VR headset"
                className="img-fluid"
              />
            </div>

            <div id="HeadsetUnder" className="text-center">
              <img
                src="pics/projects/RABBOT/GameBG.gif"
                alt="Game scene"
                className="img-fluid"
              />
            </div>

            <div className="row padding-custom">
              <div className="col-md-6 text-center">
                <h3>Summary</h3>
                <p>
                  RABBOT is my MDes thesis project exploring the possibilities
                  of generating shared awareness in a virtual reality (VR)
                  experience between a head-mounted display (HMD) wearer and
                  other observers in the same physical space. The final outcome
                  of RABBOT features a modified VR head-mounted display and
                  three-player asymmetric mobile game experiences with an
                  embedded communication system to create opportunities for
                  shared awareness amongst players. In the game, the
                  participating observers can play cooperatively as Scientists
                  to against the HMD wearer who is playing the Rabbot. Overall
                  this thesis project argues that an engaging VR experience
                  should not focus exclusively on the HMD wearer but also
                  include other audiences to address and engage the
                  relationships and interactions between them.
                </p>

                <p>
                  Full thesis paper can be found
                  <a
                    href="http://openresearch.ocadu.ca/id/eprint/2512/"
                    className="alert-link"
                  >
                    here
                  </a>
                </p>

                <img
                  src="pics/projects/RABBOT/RabbotIpadDisplay.gif"
                  alt="Ipad display"
                  className="img-fluid pt-4 pb-4"
                />
                <h3>Problem</h3>
                <p>
                  The isolating design of virtual reality (VR) head-mounted
                  displays (HMD) is typical in the single-player experience -
                  immersing one into a virtual environment. This often creates a
                  situation in which only one headset is available but no
                  opportunities for engagement are made accessible for other
                  people nearby. This isolation in VR cuts off social
                  connections and awareness between the virtual world and
                  physical world, between the HMD wearers and other observers.
                  Additionally, the current offerings in the consumer
                  electronics market of the head-mounted display have a dull
                  appearance, which also shows the lack of attention in terms of
                  design for other audiences.
                </p>
              </div>
            </div>
          </div>

          <div id="process">
            <h4>1.Ideation</h4>
            <img
              src="pics/projects/RABBOT/Sketch.jpg"
              className="img_medium"
              alt="project sketch"
            />
            <img
              src="pics/projects/RABBOT/PostNotes.jpg"
              alt="UX notes"
              className="img_medium"
            />
            <h4>2.Roadmap</h4>
            <p>
              Project management for both written document and prototype making.
            </p>
            <img
              src="pics/projects/RABBOT/roadmap.jpg"
              alt="project roadmap"
              className="img_medium"
            />
            <h4>3.Conceptual Framework</h4>
            <p>
              A diagram to define possible users, solutions and relationships
              among them.
            </p>
            <img
              src="pics/projects/RABBOT/Methdology.jpg"
              alt="methdology"
              className="img_medium"
            />
            <h4>4.Prototype Map</h4>
            <p>
              I made four iterative prototypes and extracted useful approaches
              after evalutions.
            </p>
            <img
              src="pics/projects/RABBOT/PrototypeMap.jpg"
              alt="project map"
              className="img_medium"
            />
            <h4>5.System Overview</h4>
            <img
              src="pics/projects/RABBOT/SystemDiagram.jpg"
              alt="system diagram"
              className="img_medium"
            />
            <h4>6.Workflow</h4>
            <img
              src="pics/projects/RABBOT/Workflow.jpg"
              alt="Rabbot workflow"
              className="img_large"
            />
            <h4>7.Colors & Typography</h4>
            <img
              src="pics/projects/RABBOT/Background.JPG"
              alt="game scene"
              className="img_large"
            />
            <img
              src="pics/projects/RABBOT/ColorsTypography.jpg"
              alt="colors and Typography"
              className="img_medium"
            />
            <h4>8.Branding & UI</h4>
            <img
              src="pics/projects/RABBOT/RabbotBranding.jpg"
              alt="Rabbot branding design"
              className="img_large pb-0"
            />
            <img
              src="pics/projects/RABBOT/RabbotUI.jpg"
              alt="Rabbot UI design"
              className="img_large pt-0"
            />
            <img
              src="pics/projects/RABBOT/Rabbot3D.png"
              alt="Rabbot 3d design"
              className="img_medium"
            />
            <img
              src="pics/projects/RABBOT/object.png"
              alt="rabbot 3d design object"
              className="img_medium"
            />
            <h4>9. Physical Making</h4>
            <div className="row pt-2 pb-2">
              <div className="col-md-6 bg-dark">
                <img
                  src="pics/projects/RABBOT/Modeling.jpg"
                  alt="modeling in Blender3D"
                  className="img_medium"
                />
              </div>
              <div className="col-md-6 bg-light">
                <img
                  src="pics/projects/RABBOT/Making.jpg"
                  alt="3d printing and making"
                  className="img_medium"
                />
              </div>
            </div>
            <h4>10.User Testing</h4>
            <img
              src="pics/projects/RABBOT/UserTesting.gif"
              alt="user testing"
              className="img_medium"
            />
            <img
              src="pics/projects/RABBOT/UsertestingResults.png"
              alt="user testing results"
              className="img_medium"
            />
            <div className="container" id="feedback">
              <div className="row">
                <div className="col-sm-6">
                  <h3>VR Player</h3>
                  <h5>
                    What part in the virtual reality experience did you find the
                    most interesting?
                  </h5>
                  <ul>
                    <li>Rabbit ears on the top of VR</li>
                    <li>
                      Being able to communicate with other players while being
                      visually isolated in a separate scene
                    </li>
                    <li>Shooting with my mind + mechanical ears</li>
                    <li>
                      I liked that there was connection & interaction between
                      the players even if not everyone was in VR
                    </li>
                    <li>Looking around the scene for the ball</li>
                    <li>Looking for the ball / The environment was cool</li>
                    <li>Interact with virtual objects</li>
                    <li>Environmental experience</li>
                    <li>The graphics! So pretty</li>
                    <li>
                      The incentives - winning (finding the ball). Rabbot most
                      fun.
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <h3>Non-VR Player</h3>
                  <h5>How did you find the Rabbot app to use and why?</h5>
                  <h6>I like...</h6>
                  <ul>
                    <li>
                      the AR feature that allows the interaction with VR player
                    </li>
                    <li>simple, but can be more complex + difficlut</li>
                    <li>scanning part</li>
                    <li>how my actions directly affected other players</li>
                    <li>that it was very user freiendly and initiative</li>
                  </ul>

                  <h6>I don't like...</h6>
                  <ul>
                    <li>that there isn't much to do</li>
                    <li>
                      the map. It was difficult to see where I should or could
                      move
                    </li>
                    <li>mainly just technical problems. Other wise fun.</li>
                    <li>Keep losing pionts</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Exhibits</h2>
            <img
              src="pics/projects/RABBOT/TMAC.jpg"
              alt="exhibition at TMAC"
              className="img_medium"
            />
            <figcaption className="figure-caption text-center">
              <i>What the Futures?</i>
            </figcaption>
            <figcaption className="figure-caption text-center">
              Toronto Media Arts Centre, April 2019
            </figcaption>
            <img
              src="pics/projects/RABBOT/LevelUp.jpg"
              alt="exhibition at LevelUP"
              className="img_medium"
            />
            <figcaption className="figure-caption text-center">
              <i>LevelUp</i>
            </figcaption>
            <figcaption className="figure-caption text-center">
              Design Exchange, April 2019
            </figcaption>
            <img
              src="pics/projects/RABBOT/FITC.jpg"
              alt="exhibition at FITC"
              className="img_medium"
            />
            <figcaption className="figure-caption text-center">
              <i>FITC</i>
            </figcaption>
            <figcaption className="figure-caption text-center">
              Hilton Toronto, April 2019
            </figcaption>
            <img
              src="pics/projects/RABBOT/GradEX.jpg"
              alt="exhibition at GradEX"
              className="img_medium"
            />
            <figcaption className="figure-caption text-center">
              <i>GradEX</i>
            </figcaption>
            <figcaption className="figure-caption text-center">
              OCAD University, May 2019
            </figcaption>
            <img
              src="pics/projects/RABBOT/FutureEducation.jpg"
              alt="exhibition at Future Education Festival"
              className="img_medium"
            />
            <figcaption className="figure-caption text-center">
              <i>Future Education Festival</i>
            </figcaption>
            <figcaption className="figure-caption text-center pb-4">
              Evergreen Brick Works, May 2019
            </figcaption>
          </div>
        </div>
      </div>
    );
  }
}

export default Rabbot;
