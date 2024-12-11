import React from "react";
import Styles from "./style.module.css";

function CTABlock() {
  return (
    <div className={Styles.ctaBlockContainer}>
      <div className={Styles.ctaBlockContent}>
        <h3>Let’s make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button>Get your free proposal</button>
      </div>
      <div className={Styles.ctaBlockImage}>
        <img src="./assets/ctaImage1.png" alt="ctaImage" />
      </div>
    </div>
  );
}

export default CTABlock;
