import React from "react";
import Lottie from "lottie-react";
import animation from "./animation.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { particlesOptions } from "./particleAnimation";
import { text } from "./textAnimation";
import LetterAnimation from "./letterAnimation";
import { motion } from "framer-motion";
import Nav from "./nav";
import Footer from "./footer";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      engine: null,
    };
  }

  async customInit(engine: Engine): Promise<void> {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  }

  render() {
    const bodymovinOptions = {
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation,
    };

    return (
      <motion.section exit={{ opacity: 0 }}>
        <div className="App">
          <Nav displayLogo={false} />
          <div className="w-100 text-center">
            <motion.p
              initial="initial"
              animate="animate"
              variants={text}
              className="block"
            >
              Developer | Designer | Maker
            </motion.p>
          </div>
          <div className="container">
            <Particles
              id="tsparticles"
              init={this.customInit}
              options={particlesOptions}
            />
            <div className="bm">
              <Lottie options={bodymovinOptions} />
            </div>
            <div className="line">
              <LetterAnimation letter="Y" />
              <LetterAnimation letter="I" />
              <LetterAnimation letter="Y" />
              <LetterAnimation letter="I" />
              <LetterAnimation letter="S" id="custom-space" />
              <LetterAnimation letter="H" />
              <LetterAnimation letter="A" />
              <LetterAnimation letter="O" />
            </div>
          </div>
          <Footer />
        </div>
      </motion.section>
    );
  }
}

export default Landing;
