import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class EM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      showContent: false,
      showError: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputValue === process.env.REACT_APP_PORT_PASSWORD) {
      this.setState({ showContent: true });
    } else {
      this.setState({ showError: true });
    }
  };

  render() {
    const { inputValue, showContent, showError } = this.state;

    return (
      <div className="cover-container d-flex full-screen-height">
        <Nav displayLogo={true} />
        {!showContent ? (
          <div className="p-3 mx-auto my-auto flex-column text-center">
            <main role="main" className="inner cover">
              <form onSubmit={this.handleSubmit}>
                <label
                  htmlFor="inputPassword"
                  className="col-form-label text-white"
                >
                  Please enter password below
                </label>
                <input
                  type="password"
                  value={inputValue}
                  onChange={this.handleInputChange}
                  placeholder="Password"
                  className="form-control max-width-password mx-auto"
                  id="inputPassword"
                />
                {showError && (
                  <div className="text-danger">
                    Oops, that doesn't seem right. Please send me an email.
                  </div>
                )}
                <button type="submit" className="btn btn-outline-light mt-3">
                  Submit
                </button>
              </form>
            </main>
          </div>
        ) : (
          <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
            <div className="img-container">
              <img
                className="project-main img-fluid cover"
                src="pics/projects/VPIA/VPIA_L.jpg"
                alt="VPIA Platform"
              />
              <div className="img-overlay"></div>
              <h1 className="project-title text-center text-white">VPIA</h1>
              <ProjectInfo
                year={data[1].date}
                type={data[1].type}
                tools={data[1].tools}
                role={data[1].role}
              />
            </div>
            <div id="content">
              <div className="container-fluid p-custom">
                <div className="row">
                  <div className="col-md-6">
                    <h1>Virtual Platform for Indigenous Arts</h1>
                    <p className="pt-3">
                      This project was led by Dr. Gerald McMaster as part of the
                      larger Entangled Gaze project at OCAD University’s{" "}
                      <a href="https://wapatah.com/" className="alert-link">
                        Wapatah Centre for Indigenous Visual Knowledge
                      </a>
                      , the VPIA is designed to facilitate Indigenous access,
                      interpretation, and learning from artwork collections held
                      by museums and galleries around the world.
                    </p>
                    <p className="pt-3">
                      VPIA is a wiki-style platform that allows institutional
                      artwork records to be transformed into living documents
                      through the integration of Indigenous knowledge, language,
                      and protocols
                    </p>
                    <h3 className="pt-5 text-dark">Platfrom stack: </h3>
                    <ul>
                      <li>
                        Back-end: Node.js v15.0.0, Express.js 4.17.1 with
                        RESTful API design, MySQL and Caminte, Progressive Web
                        App (PWA)
                      </li>
                      <li>
                        Front-end: React 16.14.0, Bootstrap 4.3.1 and TinyMCE
                      </li>
                      <li>Version control: Git, hosted on Github</li>
                      <li>Hosting: AWS, Nginx for reverse proxy</li>
                      <li>Linting tools: Prettier and ESlint</li>
                      <li>Bundling: Webpack</li>
                      <li>PRs testing: LGTM and TravisCI</li>
                      <li>DevOps: TravisCI and AWS Codeploy</li>
                      <li>Domain management: Reclaim Hosting/Cpanel</li>
                    </ul>
                    <p className="pt-3">
                      Visit the plafrom{" "}
                      <a href="https://vpia.wapatah.com" className="alert-link">
                        here
                      </a>
                    </p>
                    <p className="pt-3">
                      <a
                        href="https://github.com/Wapatah/VPIA"
                        className="alert-link"
                      >
                        Github repository
                      </a>
                    </p>
                    <p className="pt-3">
                      <a
                        href="https://wapatah.com/virtual-platform-for-indigenous-art/"
                        className="alert-link"
                      >
                        Learn more
                      </a>{" "}
                      about the platform
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="pics/projects/VPIA/VPIA.jpg"
                      className="img_fluid w-100"
                      alt="VPIA"
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid bg-green">
                <img
                  src="pics/projects/VPIA/showcase.jpg"
                  className="img_fluid w-100"
                  alt="VPIA page showcase"
                />
                <div className="col text-center pb-5 pt-5">
                  <ScrollToTop />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  }
}

export default EM;
