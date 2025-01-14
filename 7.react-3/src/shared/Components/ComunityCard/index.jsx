import React from "react";
import Styles from "@/styles/components/comunityCard.module.scss";

const ComunityCard = ({
  inlineStyle,
  customStyle,
  image,
  description,
  title,
}) => {
  return (
    <div className={Styles.comunityCard}>
      <div style={customStyle} className={Styles.comunityCardWrapper}>
        <div className={Styles.comunityCardImage}>
          <img src={image} alt="ComunityCard" />
        </div>
        <div className={Styles.comunityCardDescription}>
          <p>{description}</p>
        </div>
        <div style={inlineStyle} className={Styles.comunityCardTitle}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ComunityCard;
