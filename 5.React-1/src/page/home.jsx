import React from "react";

function Home() {
  return (
    <>
      <div className="main">
        <div className="description">
          <h1 className="content">
            Navigating the digital landscape for success
          </h1>
          <h4 className="paragraf">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
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
    </>
  );
}

export default Home;
