import React from "react";
import Lottie from "react-lottie";
import animation from "./animation.json";
import Particles from "react-particles-js";
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
    const particlesOptions = {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 1000 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: { enable: false, mode: "repulse" },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 200,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className="App">
          <Nav {...this.state} displayLogo={false} />
          <div id="introcontainer">
            <p className="block">Maker | Developer | Designer</p>
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
      </motion.div>
    );
  }
}

export default Landing;
