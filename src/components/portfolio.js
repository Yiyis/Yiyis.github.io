import React from "react";
import Nav from "./nav";
import ReactDOM from "react-dom";
import Isotope from "isotope-layout";
import data from "../assets/projectsData.json";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
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
  }

  handleFilterKeyChange(key) {
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
      <div>
        <Nav displayLogo={true} />
        <div className="button-group filters-button-group">
          <button
            className="btn-filter active"
            onClick={() => this.handleFilterKeyChange("*")}
          >
            All
          </button>
          <button
            className="btn-filter"
            onClick={() => this.handleFilterKeyChange("Software")}
          >
            Software Development
          </button>
          <button
            className="btn-filter"
            onClick={() => this.handleFilterKeyChange("Wearables")}
          >
            Wearables
          </button>
          <button
            className="btn-filter"
            onClick={() => this.handleFilterKeyChange("MR")}
          >
            Mixed Reality
          </button>
          <button
            className="btn-filter"
            onClick={() => this.handleFilterKeyChange("GraphicDesign")}
          >
            Graphic Design
          </button>
          <button
            className="btn-filter"
            onClick={() => this.handleFilterKeyChange("Animation")}
          >
            Animation
          </button>
          <button
            className="btn-filter"
            onClick={() => this.handleFilterKeyChange("Installation")}
          >
            Installation
          </button>
        </div>
        <div className="wrap">
          <div className="grid-sizer"></div>
          {data.map((project) => (
            <div className={`${project.tags} grid-item`} key={project.key}>
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Portfolio;
