import React from "react";
import "./style.css";
import Slide from "../slider";
import Card from "../../components/card";
import CTABlock from "../../components/ctaBlock";
import Info from "../../components/info";
import Campaignimact from "../../components/campaignImpact";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="main">
          <div className="description">
            <h1 className="content">
              Navigating the digital landscape for success
            </h1>
            <h4 className="paragraf">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </h4>
            <button className="btn-home">Book a consultation</button>
          </div>
          <div className="announcement">
            <img src="./assets/Illustration.png" alt="announce" />
          </div>
        </div>
        <div className="company">
          <a href="https://www.amazon.com/" target="_blank">
            <img src="./assets/amazon.png" alt="amazon" />
          </a>
          <a href="https://dribbble.com/" target="_blank">
            <img src="./assets/dribbble.png" alt="dribbble" />
          </a>
          <a href="https://www.hubspot.com/" target="_blank">
            <img src="./assets/hubspot.png" alt="hubspot" />
          </a>
          <a href="https://www.notion.com/" target="_blank">
            <img src="./assets/notion.png" alt="notion" />
          </a>
          <a href="https://www.netflix.com/" target="_blank">
            <img src="./assets/netflix.png" alt="netflix" />
          </a>
          <a href="https://www.zoom.com/" target="_blank">
            <img src="./assets/zoom.png" alt="amazon" />
          </a>
        </div>
        <Info
          headingInfo="Services"
          paragraphInfo="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <div className="card-container">
          <div>
            <Card
              bgColor="rgba(243, 243, 243, 1)"
              headingBgColor="rgba(185, 255, 102, 1)"
              secondaryBgColor="rgba(185, 255, 102, 1)"
              headingTitle="Search engine"
              secondaryTitle="optimization"
              icon="./icon/arrow-icon1.svg"
              link="Learn more"
              image="./assets/card-image1.png"
            />
            <Card
              bgColor="rgba(25, 26, 35, 1)"
              headingBgColor="rgba(255, 255, 255, 1)"
              secondaryBgColor="rgba(255, 255, 255, 1)"
              linkColor="rgba(255, 255, 255, 1)"
              headingTitle="Social Media"
              secondaryTitle="Marketings"
              icon="./icon/arrow-icon2.svg"
              link="Learn more"
              image="./assets/card-image2.png"
            />
            <Card
              bgColor="rgba(185, 255, 102, 1)"
              headingBgColor="rgba(255, 255, 255, 1)"
              secondaryBgColor="rgba(255, 255, 255, 1)"
              headingTitle="Content"
              secondaryTitle="Creation"
              icon="./icon/arrow-icon1.svg"
              link="Learn more"
              image="./assets/card-image3.png"
            />
          </div>
          <div>
            <Card
              bgColor="rgba(185, 255, 102, 1)"
              headingBgColor="rgba(255, 255, 255, 1)"
              secondaryBgColor="rgba(255, 255, 255, 1)"
              headingTitle="Pay-per-click"
              secondaryTitle="advertising"
              icon="./icon/arrow-icon1.svg"
              link="Learn more"
              image="./assets/card-image4.png"
            />
            <Card
              bgColor="rgba(243, 243, 243, 1)"
              headingBgColor="rgba(185, 255, 102, 1)"
              secondaryBgColor="rgba(185, 255, 102, 1)"
              headingTitle="Email"
              secondaryTitle="Marketing"
              icon="./icon/arrow-icon1.svg"
              link="Learn more"
              image="./assets/card-image5.png"
            />
            <Card
              bgColor="rgba(25, 26, 35, 1)"
              headingBgColor="rgba(185, 255, 102, 1)"
              secondaryBgColor="rgba(185, 255, 102, 1)"
              linkColor="rgba(255, 255, 255, 1)"
              headingTitle="Analytics and "
              secondaryTitle="Tracking"
              icon="./icon/arrow-icon2.svg"
              link="Learn more"
              image="./assets/card-image6.png"
            />
          </div>
        </div>
        <CTABlock />
        <Info
          style={{ backgroundColor: "red", width: 251, height: 51 }}
          headingInfo="Case Studies"
          paragraphInfo="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <Campaignimact />
        <Slide />
      </div>
    </>
  );
}

export default Home;
