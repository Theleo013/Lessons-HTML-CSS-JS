import React from "react";

function Footer() {
  return (
    <div className="container-footer">
      <div className="content-wrapper">
        <div className="footer-header">
          <div>
            <img src="./assets/Logo2.png" alt="" />
          </div>
          <div className="footer-list">
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
            </ul>
          </div>
          <div className="footer-social">
            <img src="./assets/linkedIn.png" alt="logo1" />
            <img src="./assets/facebook.png" alt="logo2" />
            <img src="./assets/twitter.png" alt="logo3" />
          </div>
        </div>
        <div className="footer-contact">
          <div className="contact-inner">
            <span className="contact">Contact us:</span>
            <span className="footer-info">Email: info@positivus.com</span>
            <span className="footer-info">Phone: 555-567-8901</span>
            <div>
              <span className="footer-info">Address: 1234 Main St</span>
              <br />
              <span className="footer-info">
                Moonstone City, Stardust State 12345
              </span>
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Email" />
            <button>Subscribe to news</button>
          </div>
        </div>
        <div className="hr">
          <hr style={{ width: "100%" }} />
        </div>
        <div className="footer-copyright">
          <p>© 2024 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
