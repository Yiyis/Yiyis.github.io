import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div
        id="header-nav"
        className={this.state.scrollup ? "hide-nav-bar" : ""}
        onWheel={(e) => this.props.handleNavigation(e)}
      >
        <a href="#menu" class="menu-link">
          <span class="bar1"></span>
          <span class="bar2"></span>
          <span class="bar3"></span>
        </a>
        <nav id="menu" class="navbutton three" role="navigation">
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
