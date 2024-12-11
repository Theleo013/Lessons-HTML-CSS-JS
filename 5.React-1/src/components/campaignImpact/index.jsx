import React from "react";
import Styles from "./style.module.css";

const content = {
  paragraph1:
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  paragraph2:
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  paragraph3:
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  icon: "./icon/arrow-icon3.svg",
};

function Campaignimact() {
  return (
    <div className={Styles.campaignContainer}>
      <div className={Styles.campaignContent}>
        <div className={Styles.campaignInner}>
          <p>{content.paragraph1}</p>
          <div className={Styles.campaignLink}>
            <a href="/">Learn more</a>
            <img src={content.icon} alt="icon" />
          </div>
        </div>
        <hr className={Styles.campaignMark} />
        <div className={Styles.campaignInner}>
          <p>{content.paragraph2}</p>
          <div className={Styles.campaignLink}>
            <a href="/">Learn more</a>
            <img src={content.icon} alt="icon" />
          </div>
        </div>
        <hr className={Styles.campaignMark} />
        <div className={Styles.campaignInner}>
          <p>{content.paragraph3}</p>
          <div className={Styles.campaignLink}>
            <a href="/">Learn more</a>
            <img src={content.icon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaignimact;
