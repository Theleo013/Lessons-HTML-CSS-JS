import React from "react";
import Styles from "@/styles/pages/home.module.scss";
import Hope from "@/shared/Components/Hope";

const Home = () => {
  return (
    <div>
      <div className={Styles.homeContainer}>
        <div className={Styles.homeWrapper}>
          <div className={Styles.homeContent}>
            <h1>Empowering Communities,{<br />} Transforming Futures</h1>
          </div>
          <div className={Styles.homeMainImage}>
            <img src="images/main-image.png" alt="mainImage" />
          </div>
        </div>
      </div>
      <div>
        <Hope />
      </div>
    </div>
  );
};
export default Home;
