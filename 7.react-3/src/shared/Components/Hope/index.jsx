import React from "react";
import Styles from "@/styles/components/hope.module.scss";

const Hope = () => {
  return (
    <div className={Styles.hopeContainer}>
      <div className={Styles.hopeContentContainer}>
        <span>What we do</span>
        <h3>
          Making a Difference,
          {<br />}
          One Life at a Time.
        </h3>
        <p>
          At Hope, we are dedicated to uplifting communities through a {<br />}
          range of targeted initiatives. Our focus areas include
        </p>
      </div>
      <div className={Styles.hopeSection}>
        <div className={Styles.hopeSectionContent}>
          <div className={Styles.contentWrapper}>
            <h4>Education Empowerment</h4>
            <p>
              Providing resources and support to ensure every child has{<br />}
              access to quality education.
            </p>
          </div>
          <div className={Styles.contentWrapper}>
            <h4>Health and Wellness</h4>
            <p>
              Delivering healthcare services and promoting healthy living in
              {<br />}
              underserved areas.
            </p>
          </div>
          <div className={Styles.contentWrapper}>
            <h4>Economic Development</h4>
            <p>
              Creating opportunities for sustainable income and self-{<br />}
              sufficiency through vocational training and micro-financing.
            </p>
          </div>
          <div className={Styles.contentWrapper}>
            <h4>Environmental Stewardship</h4>
            <p>
              Protecting our planet by promoting sustainable practices and
              {<br />}
              fostering environmental awareness.
            </p>
          </div>
        </div>
        <div className={Styles.hopeSectionImage}>
          <img src="images/hope-image.png" alt="hopeImage" />
        </div>
      </div>
    </div>
  );
};

export default Hope;
