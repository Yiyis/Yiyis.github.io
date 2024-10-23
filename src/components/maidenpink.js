import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class Maidenpink extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/MaidenPink/MaidenPink_L.jpg"
            alt="VPIA Platform"
          />
          <div className="img-overlay"></div>
          <ProjectInfo
            year={data[3].date}
            type={data[3].type}
            tools={data[3].tools}
            role={data[3].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom bg-black">
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-light">MaidenPink</h1>
                <p className="text-light">
                  Created using Adobe Photoshop, Wacom and Game Maker
                </p>
                <h3 className="pt-5 text-light">Summary</h3>
                <p className="text-light">
                  In this cyber-fantasy setting, trying to make your way to
                  Sanctuary is hard enough as it is, but for Daughter, it’s even
                  harder after Mother gets hurt. Daughter has to learn how to
                  take responsibility and fast, before Mother fades to dust!
                  Navigate through different zones, help the Locals, and defeat
                  the Final Boss in a top-down, action rpg, coming of age story.
                  Your decisions along the way will affect your skills, so make
                  sure to choose wisely!
                </p>
                <p className="text-light">
                  Group members: Roxanne Henry, Yiyi Shao, Dikla Sinai
                </p>
                <p className="text-light pt-3">
                  Full working diary can be found
                  <a
                    href="https://shao-yiyi.format.com/blog"
                    className="alert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    here
                  </a>
                  <br />
                  Download
                  <a
                    href="https://drive.google.com/open?id=138_7HyUf-9qz4ousf2WHVNRlZnB_0A_h"
                    className="alert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    this game
                  </a>{" "}
                  to play!
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="pics/projects/MaidenPink/MaidenPink2.png"
                  className="img_fluid w-100"
                  alt="maiden pink - game scene"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                title="MaidenPink"
                src="https://www.youtube.com/embed/R-dknouvwcg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center pt-5">Objective</h3>
                <p className="pt-3">
                  The primary emotional cue of Maiden Pink is the relationship
                  between mother and daughter. The game starts with the player
                  being a little girl and traveling with her mother in a fantasy
                  world. The mother is always protecting her child and won’t let
                  the daughter away from her sight. However, the mother gets
                  injured seriously at the end of the first level and can’t keep
                  protecting the daughter through the journey, so the player as
                  a little girl needs to be independent and learn skills and
                  responsibility to save her mother. We all experienced the time
                  that always being protected by our parents and the moment we
                  have to learn to face the difficulties in life on our own.
                  Women especially experiencing tremendous growth in
                  independence. As the leading emotional cue reflects the life
                  experience, the aesthetic style also needs to be emphasized to
                  evoke the childhood memory and nostalgia emotion. Nostalgia
                  can appeal to the audience on a sentimental and emotive level.
                  Retro style graphics then becomes a more appropriate approach
                  to achieve our primary goal. My own practice and experiments
                  for our game Maiden Pink are trying different methods to
                  create artworks in a retro style that bring the
                  nostalgia-evoking stimuli. All the artworks for Maiden Pink
                  are created in very small resolution (25 X 25 pixels) to mock
                  the style of old games. Our artistic style are mostly inspired
                  by <i>Hyper Light Drifter</i>.
                </p>
                <h3 className="text-dark text-center pt-5">Action</h3>
                <img
                  src="pics/projects/MaidenPink/daughter.png"
                  className="img_medium"
                  alt="character design - daughter"
                />
                <p>
                  <b>Daughter</b>: The player character. She is small and timid,
                  often depending on others for help and rescue. She is
                  determined to become more responsible and independent.
                  Daughter has a lot of love, respect and admiration for Mother.
                </p>

                <img
                  src="pics/projects/MaidenPink/mother.png"
                  className="img_medium"
                  alt="character design - mother"
                />
                <div className="row">
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom-final-attack.gif"
                      className="img_smallgif"
                      alt="character animation - mother - final attack"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom-front-gethurt.gif"
                      className="img_smallgif"
                      alt="character animation - mother - standing get hurt"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom-sit-gethurt.gif"
                      className="img_smallgif"
                      alt="character animation - mother - sitting get hurt"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom-front-idle-new.gif"
                      className="img_smallgif"
                      alt="character animation - mother - idle"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom-animation-walking.gif"
                      className="img_smallgif"
                      alt="character animation - mother - walking"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom-combat-idle-new.gif"
                      className="img_smallgif"
                      alt="character animation - mother - combat idle"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom_animation_sidewalk.gif"
                      className="img_smallgif"
                      alt="character animation - mother - side walking"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom-combat.gif"
                      className="img_smallgif"
                      alt="character animation - mother - combat"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="pics/projects/MaidenPink/mom-animation_walking_back.gif"
                      className="img_smallgif"
                      alt="character animation - mother - back walking"
                    />
                  </div>
                  <p>
                    <b>Mother</b>: Capable, brave, strong and reliable. Mother
                    is a veteran in the post-apocalyptic world and has made it
                    her priority to make sure Daughter is safe. She may have
                    sheltered her too much, which she comes to regret after her
                    injury.
                  </p>
                  <img
                    src="pics/projects/MaidenPink/boss.png"
                    className="img_medium"
                    alt="character design - boss"
                  />
                  <p>
                    <b>The Boss</b>: The final boss of the game. An old guardian
                    of Sanctuary who’s programming has been corrupted. It takes
                    the protection of Sanctuary a little too seriously. It is
                    the final obstacle for Mother and Daughter to get through.
                  </p>
                  <img
                    src="pics/projects/MaidenPink/monster.png"
                    className="img_medium"
                    alt="character design - monster"
                  />
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        src="pics/projects/MaidenPink/monster_animation_walking_fontside_shadow.gif"
                        className="img_smallgif"
                        alt="character animation - monster - front walking"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        src="pics/projects/MaidenPink/monster_eat.gif"
                        className="img_smallgif"
                        alt="character animation - monster - monster eating"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        src="pics/projects/MaidenPink/monster_combat_animation.gif"
                        className="img_smallgif"
                        alt="character animation - monster - monster combat"
                      />
                    </div>
                  </div>
                  <p>
                    <b>The Locals</b>: These creatures are unique to each zone
                    and can be pacified by puzzle solving. If you decide to do a
                    combat route instead, these Locals are your primary enemy.
                  </p>
                  <img
                    src="pics/projects/MaidenPink/frog.png"
                    className="img_medium"
                    alt="character design - frog"
                  />
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        src="pics/projects/MaidenPink/Frog_walk_shadow.gif"
                        className="img_smallgif"
                        alt="character animation - frog - walking"
                      />
                    </div>
                  </div>
                  <p>
                    <b>The Frog</b>: The frogs are your friends. They will teach
                    you a new skill. Frogs are very good at jumping, and they
                    can teach you how to do that easily, as long as you complete
                    the puzzle
                  </p>
                </div>
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

export default Maidenpink;
