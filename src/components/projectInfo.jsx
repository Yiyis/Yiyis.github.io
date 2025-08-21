import React from "react";
import { text } from "./textAnimation";
import { motion } from "framer-motion";

class ProjectInfo extends React.Component {
  render() {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={text}
        className="row row-fullwidth project-info align-items-center pb-4 text-center"
      >
        <div className="row">
          <div className="col-3 ">
            <h4 className="text-center text-white">Year</h4>
            <p className="text-center text-white">{this.props.year}</p>
          </div>
          <div className="col-3">
            <h4 className="text-center text-white">Type</h4>
            <p className="text-center text-white">{this.props.type}</p>
          </div>
          <div className="col-3">
            <h4 className="text-center text-white">Tools</h4>
            <p className="text-center text-white">{this.props.tools}</p>
          </div>
          <div className="col-3">
            <h4 className="text-center text-white">Role</h4>
            <p className="text-center text-white">{this.props.role}</p>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default ProjectInfo;
