import React from "react";
import Nav from "./nav";
import ReactDOM from "react-dom";
import Isotope from "isotope-layout";
import data from "../assets/projectsData.json";

function Portfolio() {
  const isotope = React.useRef();

  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".wrap", {
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer",
      },
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  return (
    <div>
      <Nav displayLogo={true} />
      <div className="button-group filters-button-group">
        <button
          className="btn-filter active"
          onClick={handleFilterKeyChange("*")}
        >
          All
        </button>
        <button
          className="btn-filter"
          onClick={handleFilterKeyChange("Wearables")}
        >
          Wearables
        </button>
        <button className="btn-filter" data-filter=".Game">
          Game
        </button>
        <button className="btn-filter" data-filter=".MR">
          Mixed Reality
        </button>
        <button className="btn-filter" data-filter=".GraphicDesign">
          Graphic Design
        </button>
        <button className="btn-filter" data-filter=".Animation">
          Animation
        </button>
        <button className="btn-filter" data-filter=".Installation">
          Installation
        </button>
      </div>
      <div className="wrap">
        <div className="grid-sizer"></div>
        {data.map((project) => (
          <div className={`${project.tags} grid-item`}>
            <img src={project.mainPhoto} alt="" />
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

export default Portfolio;
