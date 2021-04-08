import React from "react";
import Nav from "./nav";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../assets/projectsData.json";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "*" };
    this.handleFilterKeyChange = this.handleFilterKeyChange.bind(this);
  }

  componentDidUpdate() {
    if (this.isotope === undefined) {
      this.isotope = new Isotope(".wrap", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer",
        },
      });
    }
    this.isotope.layout();
  }

  handleFilterKeyChange(key) {
    this.setState(function () {
      return {
        selected: key,
      };
    });
    if (this.isotope === undefined) {
      this.isotope = new Isotope(".wrap", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer",
        },
      });
    }
    if (key === "*") {
      this.isotope.arrange({ filter: `*` });
    } else {
      this.setState({ filter: key });
      this.isotope.arrange({ filter: `.${key}` });
    }
  }

  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="button-group filters-button-group">
          <button
            className={`${
              this.state.selected === "*" ? "active" : ""
            } btn-filter`}
            onClick={() => {
              this.handleFilterKeyChange("*");
            }}
          >
            All
          </button>
          <button
            className={`${
              this.state.selected === "Software" ? "active" : ""
            } btn-filter`}
            onClick={() => {
              this.handleFilterKeyChange("Software");
            }}
          >
            Software Development
          </button>
          <button
            className={`${
              this.state.selected === "Wearables" ? "active" : ""
            } btn-filter`}
            onClick={() => this.handleFilterKeyChange("Wearables")}
          >
            Wearables
          </button>
          <button
            className={`${
              this.state.selected === "MR" ? "active" : ""
            } btn-filter`}
            onClick={() => this.handleFilterKeyChange("MR")}
          >
            Mixed Reality
          </button>
          <button
            className={`${
              this.state.selected === "GraphicDesign" ? "active" : ""
            } btn-filter`}
            onClick={() => this.handleFilterKeyChange("GraphicDesign")}
          >
            Graphic Design
          </button>
          <button
            className={`${
              this.state.selected === "Animation" ? "active" : ""
            } btn-filter`}
            onClick={() => this.handleFilterKeyChange("Animation")}
          >
            Animation
          </button>
          <button
            className={`${
              this.state.selected === "Installation" ? "active" : ""
            } btn-filter`}
            onClick={() => this.handleFilterKeyChange("Installation")}
          >
            Installation
          </button>
        </div>
        <div className="wrap">
          <div className="grid-sizer"></div>
          {data.map((project) => (
            <Link
              to={project.link}
              className={`${project.tags} grid-item`}
              key={project.key}
            >
              <img
                src={project.mainPhoto}
                alt=""
                onLoad={() => this.setState({ loaded: true })}
              />
              <div className="info-wrapper">
                <div className="name">{project.name}</div>
                <div className="memo">{project.memo}</div>
                <div className="date">{project.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    );
  }
}
export default Portfolio;
