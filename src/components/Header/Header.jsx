import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
          {config.siteTitle} 
      </header>
    );
  }
}

export default Header;