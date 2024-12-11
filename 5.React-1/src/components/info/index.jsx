import React from "react";
import Style from "./style.module.css";

function Info({ headingInfo, paragraphInfo }) {
  return (
    <div className={Style.infoContainer}>
      <span className={Style.infoSection}>{headingInfo}</span>
      <p className={Style.infoParagraph}>{paragraphInfo}</p>
    </div>
  );
}

export default Info;
