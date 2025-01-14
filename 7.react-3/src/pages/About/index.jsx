import React from "react";
import Styles from "@/styles/pages/about.module.scss";
import Journey from "@/shared/Components/Journey";
import TeamCard from "@/shared/Components/teamCard";

const About = () => {
  let teamList = [
    {
      id: 1,
      image: "images/teamImage1.png",
      title: "Founder & Executive Director",
      fsName: "Emma Johnson",
      about:
        "Emma Johnson founded Hope in 2023 and has over 20 years of nonprofit experience. Her passion for education and health drives Hope's mission, inspiring the team with her leadership and dedication to making a difference.",
    },
    {
      id: 2,
      image: "images/teamImage2.png",
      title: "Director of Programs",
      fsName: "Michael Ramirez",
      about:
        "Michael Ramirez, with a background in social work and public health, oversees all of Hope's initiatives. His strategic planning and compassionate approach ensure our programs effectively meet community needs.",
    },
    {
      id: 3,
      image: "images/teamImage3.png",
      title: "Head of Education Initiatives",
      fsName: "Sophia Lee",
      about:
        "Sophia Lee designs and leads our education programs. With over a decade of teaching experience, she is committed to providing quality education and creating opportunities for children to thrive.",
    },
    {
      id: 4,
      image: "images/teamImage4.png",
      title: "Community Health Coordinator",
      fsName: "Dora Thompson",
      about:
        "Dora Thompson manages our health and wellness programs. With a background in nursing and public health, he focuses on improving health outcomes and promoting preventive care in underserved communities.",
    },
  ];

  const id1 = teamList.find((el) => el.id === 1);
  const id2 = teamList.find((el) => el.id === 2);
  const id3 = teamList.find((el) => el.id === 3);
  const id4 = teamList.find((el) => el.id === 4);

  return (
    <>
      <div className={Styles.aboutContainer}>
        <div className={Styles.aboutContentContainer}>
          <span>About us</span>
          <h3>A Future Filled with Hope</h3>
          <p>
            At Hope, we are dedicated to uplifting communities through a range
            of targeted initiatives
          </p>
        </div>
        <div className={Styles.aboutImageContainer}>
          <img src="images/about-image.png" alt="aboutImage" />
          <div className={Styles.aboutImageWrapper}>
            <div className={Styles.aboutImageContent}>
              <h4>Our Mission</h4>
              <p>
                Our mission is to empower individuals and communities by
                providing the tools and support they need to overcome challenges
                and achieve their fullest potential through collaborative
                efforts.
              </p>
            </div>
            <div className={Styles.aboutImageContent}>
              <h4>Our Vision</h4>
              <p>
                Our vision is a world where every individual, regardless of
                their background or circumstances has the opportunity to thrive.
                We envision communities that are resilient, self-reliant, and
                full of promise.
              </p>
            </div>
            <div className={Styles.aboutImageContent}>
              <h4>Global Movement</h4>
              <p>
                We envision a global movement where compassion and empathy drive
                action, where the barriers of inequality and injustice are
                dismantled, and where hope is not just a fleeting sentiment but
                a tangible reality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Journey />
      <div className={Styles.teamContainer}>
        <div className={Styles.teamHeadingTitle}>
          <h3>Our team</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className={Styles.teamCardContainer}>
          <div className={Styles.teamCardWrapper}>
            <TeamCard
              image={id1.image}
              title={id1.title}
              fsName={id1.fsName}
              about={id1.about}
            />
            <TeamCard
              image={id2.image}
              title={id2.title}
              fsName={id2.fsName}
              about={id2.about}
            />
          </div>
          <div className={Styles.teamCardWrapper}>
            <TeamCard
              image={id3.image}
              title={id3.title}
              fsName={id3.fsName}
              about={id3.about}
            />
            <TeamCard
              image={id4.image}
              title={id4.title}
              fsName={id4.fsName}
              about={id4.about}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
