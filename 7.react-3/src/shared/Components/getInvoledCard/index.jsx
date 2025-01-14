import React from "react";
import Styles from "@/styles/components/getInvoledCard.module.scss";

const GetInvoledCard = ({
  icon,
  title,
  description,
  button,
  mainButtonStyle,
  image,
  isSpecial,
  buttonInput,
  buttonIcon1,
  buttonIcon2,
  customImage,
  customImputStyle,
}) => {
  return (
    <div className={Styles.getInvoledCard}>
      <div className={Styles.getInvoledLogo}>
        <img src={icon} alt="icon" />
      </div>
      <div className={Styles.getInvoledContentContainer}>
        <div className={Styles.getInvoledContentWrapper}>
          <div className={Styles.getInvoledCardTitle}>
            <h3>{title}</h3>
          </div>
          <div className={Styles.getInvoledDescription}>
            <p>{description}</p>
          </div>
          <div className={Styles.getInvoledMainButton}>
            <button style={mainButtonStyle}>{button}</button>
          </div>
          {isSpecial && (
            <div style={customImputStyle} className={Styles.getInvoledInput}>
              <input placeholder="Input Email Address" type="text" />
              <button>{buttonInput}</button>
            </div>
          )}
        </div>
        <div className={Styles.getInvoledImageContainer}>
          <div className={Styles.getInvoledImage}>
            <img style={customImage} src={image} />
          </div>
          {isSpecial && (
            <div className={Styles.getInvoledButtonContainer}>
              <button>
                <img src={buttonIcon1} alt="buttonIcon" />
                Facebook
              </button>
              <button>
                <img src={buttonIcon2} alt="buttonIcon" />
                Instagram
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInvoledCard;
