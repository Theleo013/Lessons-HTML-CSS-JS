import React from "react";
import Styles from "./style.module.css";

// const cardStyle = {
//   bgColorGreen: "rgba(185, 255, 102, 1)",
//   bgColorGray:"rgba(243, 243, 243, 1)",
// };

function Card({
  bgColor,
  headingBgColor,
  secondaryBgColor,
  linkColor,
  headingTitle,
  secondaryTitle,
  icon,
  link,
  image,
}) {
  return (
    <div className={Styles.card} style={{ backgroundColor: bgColor }}>
      <div className={Styles.cardHeader}>
        <div className={Styles.titleContainer}>
          <span
            style={{ backgroundColor: headingBgColor }}
            className={Styles.headingTitle}
          >
            {headingTitle}
          </span>
          <br />
          <span
            style={{ backgroundColor: secondaryBgColor }}
            className={Styles.secondaryTitle}
          >
            {secondaryTitle}
          </span>
        </div>
        <div className={Styles.iconContainer}>
          <img className={Styles.icon} src={icon} alt="icon" />
          <a style={{ color: linkColor }} className={Styles.learnMore} href="/">
            {link}
          </a>
        </div>
      </div>
      <div className={Styles.cardImageContainer}>
        <img className={Styles.cardImage} src={image} alt="card-img" />
      </div>
    </div>
  );
}

export default Card;
