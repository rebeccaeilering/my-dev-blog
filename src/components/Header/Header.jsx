import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <a class="site-title" href="/my-dev-blog">{config.siteTitle}</a>
          <a className="header-btn" href="/my-dev-blog/about">About</a>
        </div>
      </header>
    );
  }
}

export default Header;