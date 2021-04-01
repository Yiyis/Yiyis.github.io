import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div
        id="header-nav"
        className={this.props.scrolling ? "" : "hide-nav-bar"}
      >
        <a href="#menu" className="menu-link">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </a>
        <nav id="menu" className="navbutton three" role="navigation">
          <ul>
            <li>
              <a href="index.html" id="active">
                Hello!
              </a>
            </li>
            <li>
              <a href="portfolio.html">Portfolio</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
