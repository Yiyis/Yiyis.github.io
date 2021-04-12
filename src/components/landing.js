import React from "react";
import Lottie from "react-lottie";
import animation from "./animation.json";
import Particles from "react-particles-js";
import { particlesOptions } from "./particleAnimation";
import { text } from "./textAnimation";
import LetterAnimation from "./letterAnimation";
import { motion } from "framer-motion";
import Nav from "./nav";

class Landing extends React.Component {
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
              Maker | Developer | Designer
            </motion.p>
          </div>
          <div className="container">
            <Particles params={particlesOptions} />
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
        </div>
      </motion.section>
    );
  }
}

export default Landing;
