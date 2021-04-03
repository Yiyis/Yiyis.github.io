import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const displayLogo = this.props.displayLogo;
    return (
      <div
        id="header-nav"
        className={this.props.scrolling ? "hide-nav-bar" : ""}
      >
        {displayLogo ? (
          <div className="myBrand" id="logo">
            <Link to="/">
              <img className="nav-logo" src="logo/logo_White.png" />
            </Link>
          </div>
        ) : (
          ""
        )}
        <a href="#menu" className="menu-link" onClick={this.handleClick}>
          <span className={this.state.open ? "bar1 bar-1" : "bar1"}></span>
          <span className={this.state.open ? "bar2 bar-2" : "bar2"}></span>
          <span className={this.state.open ? "bar3 bar-3" : "bar3"}></span>
        </a>
        <nav id="menu" className="navbutton three" role="navigation">
          <ul className="d-none d-lg-block d-xl-block d-md-block">
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul
            className={
              this.state.open
                ? "d-block d-lg-none d-xl-none d-md-none"
                : "d-none"
            }
          >
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
