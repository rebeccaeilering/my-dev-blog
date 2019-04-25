import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.css";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="notice-container">
          <span>{copyright}</span>
          <div className="social-links">
            <Link to={url}>
              Subscribe
            </Link>
            <UserLinks config={config} labeled />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

