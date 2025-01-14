import React from "react";
import Styles from "@/styles/components/galleryCard.module.scss";

const GalleryCard = ({ image1, image2, image3, image4, image5, image6 }) => {
  return (
    <div className={Styles.galleryCard}>
      <div className={Styles.galleryCardContainer}>
        <img src={image1} alt="campainImage1" />
        <img src={image2} alt="campainImage2" />
        <img src={image3} alt="campainImage3" />
      </div>
      <div className={Styles.galleryCardContainer}>
        <img src={image4} alt="campainImage4" />
        <img src={image5} alt="campainImage5" />
        <img src={image6} alt="campainImage6" />
      </div>
    </div>
  );
};

export default GalleryCard;
