import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: false,
      scrolling: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }

  render() {
    const displayLogo = this.props.displayLogo;
    return (
      <div
        id="header-nav"
        className={this.state.scrolling ? "hide-nav-bar" : ""}
      >
        {displayLogo ? (
          <div className="myBrand" id="logo">
            <Link to="/">
              <img
                className="nav-logo"
                src="logo/logo_White.png"
                alt="Yiyi Shao logo"
              />
            </Link>
          </div>
        ) : (
          ""
        )}
        <button className="menu-link btn" onClick={this.handleClick}>
          <span className={this.state.open ? "bar1 bar-1" : "bar1"}></span>
          <span className={this.state.open ? "bar2 bar-2" : "bar2"}></span>
          <span className={this.state.open ? "bar3 bar-3" : "bar3"}></span>
        </button>
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
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
