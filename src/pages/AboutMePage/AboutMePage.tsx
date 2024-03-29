import { FC } from "react";

import styles from "./AboutMePage.module.scss";
import Title from "../../components/Title/Title";
import { aboutMePageData } from "../../assets/data/data";

const AboutMePage: FC = () => {
  return (
    <>
      <section className={styles["about-me"]}>
        <div className="container">
          <div className={styles["about-me__inner"]}>
            <div className={styles["about-me__text-wrap"]}>
              <Title className={styles["about-me__title"]}>
                {aboutMePageData.aboutMe.title}
              </Title>
              <div className={styles["text"]}>
                {aboutMePageData.aboutMe.text}
              </div>
            </div>
            <img
              src={aboutMePageData.aboutMe.img.path}
              alt={aboutMePageData.aboutMe.img.alt}
            />
          </div>
        </div>
        <div className={styles["about-me__gradient"]} />
      </section>
      <section className={styles["studies"]}>
        <div className="container">
          <div className={styles["studies__inner"]}>
            <div className={styles["text"]}>{aboutMePageData.studies.text}</div>
            <img
              src={aboutMePageData.studies.img.path}
              alt={aboutMePageData.studies.img.alt}
            />
          </div>
        </div>
      </section>
      <section className={styles["frontend"]}>
        <div className="container">
          <div className={styles["frontend__inner"]}>
            <div className={styles["text"]}>
              {aboutMePageData.frontend.text}
            </div>
            <img
              src={aboutMePageData.frontend.img.path}
              alt={aboutMePageData.frontend.img.alt}
            />
          </div>
        </div>
        <div className={styles["frontend__gradient"]} />
      </section>
    </>
  );
};

export default AboutMePage;
