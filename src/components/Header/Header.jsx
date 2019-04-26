import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <a class="site-title" href="">{config.siteTitle}</a>
          <nav>
            <a className="header-btn" href="/about">About</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;