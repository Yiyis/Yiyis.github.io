import React, { Component } from "react";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => this.scrollToTop()}
      >
        BACK TO TOP
      </button>
    );
  }
}
