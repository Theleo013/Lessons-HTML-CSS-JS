import React from "react";
import Styles from "@/styles/pages/campaigns.module.scss";
import ComunityCard from "@/shared/Components/ComunityCard";
import { SassColor } from "sass";
import GalleryCard from "@/shared/Components/galleryCard";
const Campaigns = () => {
  const comunity = [
    {
      id: 1,
      image: "src/assets/comunityImage1.png",
      description:
        "Hope has given my community the resources we needed to build a better future. Through their educational programs, my children now have opportunities I could only dream of The difference in our lives is beyond words.",
      title: "Maria, Community Member",
    },
    {
      id: 2,
      image: "images/comunityImage2.png",
      description:
        "Volunteering with Hope has been a life-changing experience. Seeing the direct impact of our work on people's lives is incredibly rewarding.",
      title: "John, Volunteer",
    },
    {
      id: 3,
      image: "images/comunityImage3.png",
      description:
        "As a corporate partner, collaborating with Hope has been incredibly fulfilling. Their transparency, dedication, and impactful programs make it easy to support their mission. We are proud to contribute to a cause that truly transforms lives.",
      title: "Sarah, Corporate Partner",
    },
    {
      id: 4,
      image: "images/comunityImage4.png",
      description:
        "Hope's micro-financing program has been a game-changer for our community. Small loans have allowed us to start businesses and improve our economic stability. We are now more self-reliant and optimistic about our future.",
      title: "Raj, Entrepreneur",
    },
    {
      id: 5,
      image: "images/comunityImage5.png",
      description:
        "Hope's healthcare initiatives have transformed our community's well-being. Access to regular medical check-ups and health education has drastically improved our quality of life. We are healthier and more informed, thanks to their tireless efforts.",
      title: "David, Beneficiary",
    },
    {
      id: 6,
      image: "images/comunityImage6.png",
      description:
        "Participating in Hope's vocational training program has given me the skills and confidence to start my own business. I am now able to provide for my family and contribute to my community. Hope has truly changed my life.",
      title: "Amina, Program Participant",
    },
  ];

  const comunityID1 = comunity.find((item) => item.id === 1);
  const comunityID2 = comunity.find((item) => item.id === 2);
  const comunityID3 = comunity.find((item) => item.id === 3);
  const comunityID4 = comunity.find((item) => item.id === 4);
  const comunityID5 = comunity.find((item) => item.id === 5);
  const comunityID6 = comunity.find((item) => item.id === 6);

  const CampaignGallery = {
    image1: "images/galleryImage1.png",
    image2: "images/galleryImage2.png",
    image3: "images/galleryImage3.png",
    image4: "images/galleryImage4.png",
    image5: "images/galleryImage5.png",
    image6: "images/galleryImage6.png",
  };

  return (
    <>
      <div className={Styles.campaignsContainer}>
        <div className={Styles.campaignsWrapper}>
          <div className={Styles.campaignsHeading}>
            <h3>Voices of Hope</h3>
          </div>
          <div className={Styles.campaignsCardContainer}>
            <div className={Styles.campaignsContentContainer}>
              <ComunityCard
                image={comunityID1.image}
                description={comunityID1.description}
                title={comunityID1.title}
              />
              <ComunityCard
                inlineStyle={{ paddingTop: "11px" }}
                image={comunityID2.image}
                description={comunityID2.description}
                title={comunityID2.title}
              />
              <ComunityCard
                customStyle={{ display: "flex", gap: "11px" }}
                image={comunityID3.image}
                description={comunityID3.description}
                title={comunityID3.title}
              />
            </div>
            <div className={Styles.campaignsContentContainer}>
              <ComunityCard
                image={comunityID4.image}
                description={comunityID4.description}
                title={comunityID4.title}
              />
              <ComunityCard
                image={comunityID5.image}
                description={comunityID5.description}
                title={comunityID5.title}
              />
              <ComunityCard
                image={comunityID6.image}
                description={comunityID6.description}
                title={comunityID6.title}
              />
            </div>
          </div>
          <GalleryCard
            image1={CampaignGallery.image1}
            image2={CampaignGallery.image2}
            image3={CampaignGallery.image3}
            image4={CampaignGallery.image4}
            image5={CampaignGallery.image5}
            image6={CampaignGallery.image6}
          />
        </div>
      </div>
    </>
  );
};

export default Campaigns;
