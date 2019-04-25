import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          {config.siteTitle} 
        </div>
        <nav>
          <a className="header-btn" href="">Categories</a>
          <a className="header-btn" href="">Tags</a>
          <a className="header-btn" href="">About</a>
        </nav>
      </header>
    );
  }
}

export default Header;