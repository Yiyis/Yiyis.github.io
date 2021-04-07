import React from "react";
import Lottie from "react-lottie";
import animation from "./animation.json";
import Particles from "react-particles-js";
import { particlesOptions } from "./particleAnimation";
import LetterAnimation from "./letterAnimation";
import { motion } from "framer-motion";
import Nav from "./nav";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolling: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }
  render() {
    const bodymovinOptions = {
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation,
    };
    const text = {
      initial: { y: 20, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      },
    };

    return (
      <motion.section exit={{ opacity: 0 }}>
        <div className="App">
          <Nav {...this.state} displayLogo={false} />
          <div id="introcontainer">
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
