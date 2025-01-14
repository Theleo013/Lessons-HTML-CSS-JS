import React from "react";
import Styles from "@/styles/components/header.module.scss";
import { NavLink } from "react-router-dom";
import { urls } from "@/shared/urls";
import ThemedSwitcher from "@/shared/context/ThemedSwitcher";

const Header = () => {
  return (
    <div className={Styles.headerContainer}>
      <div className={Styles.logo}>
        <NavLink to={urls.HOME}>Hope</NavLink>
      </div>
      <div className={Styles.nav}>
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
      <div className={Styles.donate}>
        <button>Donate</button>
      </div>
      <ThemedSwitcher />
    </div>
  );
};
export default Header;
