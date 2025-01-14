import React from "react";
import Styles from "@/styles/pages/getInvoled.module.scss";
import GetInvoledCard from "@/shared/Components/getInvoledCard";
import GalleryCard from "@/shared/Components/galleryCard";

const GetInvoled = () => {
  let getInvoledContent = [
    {
      id: 1,
      icon: "icons/icon1.png",
      title: "Donate",
      description:
        "Your generous contributions help us fund vital programs and initiatives. Whether it's a one-time donation or a recurring gift, your support enables us to provide education, healthcare, and economic opportunities to those who need it most. Every dollar makes a difference.",
      button: "Donate",
      image: "images/getInvoledImage1.png",
    },
    {
      id: 2,
      icon: "icons/icon2.png",
      title: "Volunteer",
      description:
        "Offer your time and skills to support our projects on the ground. Whether you're a teacher, a healthcare professional, a financial expert, or someone with a passion for environmental conservation, your expertise is invaluable. Join our team of dedicated volunteers and experience the profound impact of your efforts firsthand.",
      button: "Contact us",
      image: "images/getInvoledImage2.png",
    },
    {
      id: 3,
      icon: "icons/icon3.png",
      title: "Advocate for us",
      description:
        "Raise awareness about our cause and help us amplify our message. Use your voice to share our mission with your network, organize fundraising events, or advocate for policy changes that support our work. Your advocacy can inspire others to join the movement and make a difference.",
      button: "Contact us",
      image: "images/getInvoledImage3.png",
    },
    {
      id: 4,
      icon: "icons/icon4.png",
      title: "Stay Connected",
      description:
        "Stay connected with Hope and be the first to know about our latest initiatives, success stories, and upcoming events. By subscribing to our newsletter, you'll receive regular updates straight to your inbox, giving you an inside look at the impact we're making and the lives we're transforming.",
      buttonInput: "Sign up",
      image: "images/getInvoledImage4.png",
      buttonIcon1: "icons/facebook2.svg",
      buttonIcon2: "icons/instagram2.svg",
      isSpecial: true,
    },
  ];

  const involedID1 = getInvoledContent.find((item) => item.id === 1);
  const involedID2 = getInvoledContent.find((item) => item.id === 2);
  const involedID3 = getInvoledContent.find((item) => item.id === 3);
  const involedID4 = getInvoledContent.find((item) => item.id === 4);

  const getInvoledGallery = {
    image1: "images/gallery1.png",
    image2: "images/gallery2.png",
    image3: "images/gallery3.png",
    image4: "images/gallery4.png",
    image5: "images/gallery5.png",
    image6: "images/gallery6.png",
  };
  return (
    <div className={Styles.getInvoled}>
      <div className={Styles.getInvoledHeadingContainer}>
        <div className={Styles.getInvoledTitle}>
          <h3>Get Involed</h3>
        </div>
        <div className={Styles.getInvoledParagraph}>
          <p>
            At Hope, we believe that every person has the power to make a
            difference. Together, we can create a brighter, more hopeful future
            for all. Join us in our mission and make an impact today.
          </p>
        </div>
      </div>
      <div className={Styles.getInvoledCardContainer}>
        <GetInvoledCard
          icon={involedID1.icon}
          title={involedID1.title}
          description={involedID1.description}
          button={involedID1.button}
          mainButtonStyle={{
            width: "170px",
            height: "50px",
            borderRadius: "8px",
          }}
          image={involedID1.image}
        />
        <GetInvoledCard
          icon={involedID2.icon}
          title={involedID2.title}
          description={involedID2.description}
          button={involedID2.button}
          mainButtonStyle={{
            width: "170px",
            height: "50px",
            borderRadius: "8px",
          }}
          image={involedID2.image}
        />
        <GetInvoledCard
          icon={involedID3.icon}
          title={involedID3.title}
          description={involedID3.description}
          button={involedID3.button}
          mainButtonStyle={{
            width: "170px",
            height: "50px",
            borderRadius: "8px",
          }}
          image={involedID3.image}
        />
        <GetInvoledCard
          icon={involedID4.icon}
          title={involedID4.title}
          description={involedID4.description}
          buttonInput={involedID4.buttonInput}
          customImputStyle={{ marginTop: "-20px" }}
          customImage={{ width: "562px", height: "368px" }}
          image={involedID4.image}
          buttonIcon1={involedID4.buttonIcon1}
          buttonIcon2={involedID4.buttonIcon2}
          isSpecial={involedID4.isSpecial}
        />
      </div>
      <div className={Styles.getInvoledGalleryContainer}>
        <GalleryCard
          image1={getInvoledGallery.image1}
          image2={getInvoledGallery.image2}
          image3={getInvoledGallery.image3}
          image4={getInvoledGallery.image4}
          image5={getInvoledGallery.image5}
          image6={getInvoledGallery.image6}
        />
      </div>
    </div>
  );
};

export default GetInvoled;
