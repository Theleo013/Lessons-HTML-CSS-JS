import React from "react";
import Styles from "@/styles/components/journey.module.scss";

const Journey = () => {
  return (
    <>
      <div className={Styles.journeyContainer}>
        <div className={Styles.journeyHeadingTitle}>
          <span>Friends.</span>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <span>Family.</span>
          <br />
          <span>Communities</span>
        </div>
        <div className={Styles.journeyContentContainer}>
          <div className={Styles.journeyContent}>
            <div>
              <h4>The Journey of Hope</h4>
            </div>
            <div className={Styles.journeyContentPar}>
              <div>
                <p>
                  Hope was born out of a deep-seated belief that every life
                  holds immense value and potential. Founded in [Year], our
                  organization began with a small group of passionate
                  individuals determined to make a difference. From humble
                  beginnings, we have grown into a network of dedicated
                  volunteers, supporters, and partners, all united by a common
                  goal: to bring hope to those who need it most.
                </p>
              </div>
              <div>
                <p>
                  Our journey has been marked by countless stories of
                  transformation and triumph. From a child who received a
                  scholarship and became the first in their family to attend
                  college, to communities that have blossomed through our
                  sustainable farming programs - these successes fuel our
                  commitment to continue our work with unwavering dedication. We
                  invite you to be a part of our story.
                </p>
              </div>
              <div>
                <p>
                  Together, we can turn the tide and create a world where hope
                  is a reality for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.journeyImage}>
            <img src="images/journey-image.png" alt="journeyImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
