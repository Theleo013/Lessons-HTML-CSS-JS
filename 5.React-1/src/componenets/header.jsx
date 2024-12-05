import React from "react";
import "./style.css";
function Header() {
  return (
    <div className="container">
      <div>
        <img src="./assets/Positivus.png" alt="logo" />
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Services</a>
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
      </div>
    </div>
  );
}

export default Header;
