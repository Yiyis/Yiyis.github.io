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
      showContent: true,
      showError: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // if (this.state.inputValue === process.env.REACT_APP_PORT_PASSWORD) {
    //   this.setState({ showContent: true });
    // } else {
    //   this.setState({ showError: true });
    // }
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
                src="pics/projects/E/E-full.jpg"
                alt="Image of Shopify Market Place"
              />
              <div className="img-overlay"></div>
              <h1 className="project-title text-center text-white">
                Headless Wordpress Development
              </h1>
              <ProjectInfo
                year={data[20].date}
                type={data[20].type}
                tools={data[20].tools}
                role={data[20].role}
              />
            </div>
            <div id="content">
              <div className="container-fluid p-custom">
                <div className="row">
                  <div className="col-md-6">
                    <h1>Headless Wordpress Development</h1>
                    <p className="pt-3">
                      As a developer at Art & Science, I had the opportunity to
                      contribute to an exciting project for Embark. My role
                      involved developing the frontend for their brand-new
                      website using a headless WordPress setup. This project was
                      a total rebuild from the ground up, aimed at creating a
                      modern, dynamic, and user-friendly online presence. By
                      leveraging the flexibility of headless WordPress, we were
                      able to deliver a seamless and responsive experience that
                      enhances user engagement. Our efforts focused on ensuring
                      a visually appealing and intuitive interface that aligns
                      with Embark's vision and provides their audience with an
                      exceptional digital experience.
                    </p>
                    <h3 className="pt-5 text-dark">Platform stack: </h3>
                    <ul>
                      <li>Frontend: Nuxt3, Vue3</li>
                      <li>Backend: Wordpress </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="pics/projects/E/E-2.jpg"
                      className="img_fluid w-100"
                      alt="VPIA"
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid bg-green">
                <h3 className="pt-5 text-dark text-center">
                  <a href="https://www.embark.ca" className="alert-link">
                    Visit Site
                  </a>
                </h3>
                <img
                  src="pics/projects/E/showcase.jpg"
                  className="img_fluid w-100"
                  alt="Headless wordpress development showcase"
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
