import React from "react";
import Nav from "./nav";
import { motion } from "framer-motion";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div>ABOUTTTTT!</div>;
      </motion.div>
    );
  }
}

export default About;
