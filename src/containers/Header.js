import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="site-header">
        <div className="container">
          <a href="index.html" className="branding">
            <div className="logo-type">
              <h1 className="site-title">Company name</h1>
              <small className="site-description">tagline goes here</small>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
