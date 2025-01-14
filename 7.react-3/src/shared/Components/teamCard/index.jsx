import React from "react";
import Styles from "@/styles/components/teamCard.module.scss";

const TeamCard = ({ image, title, fsName, about }) => {
  return (
    <>
      <div className={Styles.teamCard}>
        <div className={Styles.teamImage}>
          <img src={image} alt="teamImage" />
        </div>
        <div className={Styles.teamContentContainer}>
          <div>
            <span>{title}</span>
          </div>
          <div>
            <h4>{fsName}</h4>
          </div>
          <div>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamCard;
