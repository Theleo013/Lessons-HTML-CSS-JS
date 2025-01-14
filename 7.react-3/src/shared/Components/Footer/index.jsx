import React from "react";
import Styles from "@/styles/components/footer.module.scss";
import { NavLink } from "react-router-dom";
import { urls } from "@/shared/urls";

const Footer = () => {
  return (
    <div className={Styles.footerContainer}>
      <div className={Styles.footerWrapper}>
        <div className={Styles.footerContentContainer}>
          <div className={Styles.footerLogo}>
            <h4>Hope</h4>
          </div>
          <div className={Styles.footerContentWrapper}>
            <div className={Styles.footerContent}>
              <span>Content:</span>
              <p>1800 123 4567</p>
              <p>info@Hope.io</p>
            </div>
            <div className={Styles.footerSocial}>
              <img src="icons/facebook.svg" alt="facebook" />
              <img src="icons/instagram.svg" alt="instagram" />
              <img src="icons/twitter.svg" alt="twitter" />
              <img src="icons/linkedIn.svg" alt="linkedIn" />
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.footerNavContainer}>
            <div className={Styles.footerNav}>
              <ul>
                <li>
                  <NavLink to={urls.ABOUT_US}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to={urls.CAMPAIGNS}>Campaigns</NavLink>
                </li>
                <li>
                  <NavLink to={urls.GET_INVOLVED}>Get Involed</NavLink>
                </li>
                <li>
                  <NavLink to={urls.CONTACT_US}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className={Styles.footerNav}>
              <ul>
                <li>
                  <NavLink to={urls.ABOUT_US}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to={urls.CAMPAIGNS}>Campaigns</NavLink>
                </li>
                <li>
                  <NavLink to={urls.GET_INVOLVED}>Get Involed</NavLink>
                </li>
                <li>
                  <NavLink to={urls.CONTACT_US}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.footerCopyRightContainer}>
        <div className={Styles.footerCopyRight}>
          <p>© 2023 Hope. All rights reserved.</p>
        </div>
        <div className={Styles.footerCopyRightSecondary}>
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
