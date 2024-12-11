import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div>
        <img src="./assets/Positivus.png" alt="logo" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Use Cases</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>

          <button className="btn-header">Request a quote </button>
        </ul>
        <img className="icon_nav" src="./icon/navbar_icon.svg" alt="icon" />
      </div>
    </div>
  );
}

export default Header;
