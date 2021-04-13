import React from "react";

class Footer extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <>
        <span className="text-secondary text-center footer">
          <small>© Yiyi Shao {this.getYear()}</small>
        </span>
      </>
    );
  }
}

export default Footer;
