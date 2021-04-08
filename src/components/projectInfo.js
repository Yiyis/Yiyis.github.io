import React from "react";

class ProjectInfo extends React.Component {
  render() {
    return (
      <div className="row row-fullwidth project-info align-items-center">
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
    );
  }
}

export default ProjectInfo;
