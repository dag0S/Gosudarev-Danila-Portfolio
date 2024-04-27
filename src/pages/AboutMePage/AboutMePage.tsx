import { FC } from "react";
import { motion } from "framer-motion";

import Title from "../../components/Title/Title";
import { aboutMePageData } from "../../assets/data/data";

import styles from "./AboutMePage.module.scss";
import { MProgressiveImage } from "../../components/ProgressiveImage/ProgressiveImage";

const leftToRightAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const rightToLeftAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const AboutMePage: FC = () => {
  return (
    <>
      <motion.section
        className={styles["about-me"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <div className={styles["about-me__inner"]}>
            <motion.div
              className={styles["about-me__text-wrap"]}
              variants={leftToRightAnimation}
            >
              <Title className={styles["about-me__title"]}>
                {aboutMePageData.aboutMe.title}
              </Title>
              <div className={styles["text"]}>
                {aboutMePageData.aboutMe.text}
              </div>
            </motion.div>
            <MProgressiveImage
              variants={rightToLeftAnimation}
              placeholderSrc={aboutMePageData.aboutMe.img.tiny}
              src={aboutMePageData.aboutMe.img.path}
              alt={aboutMePageData.aboutMe.img.alt}
            />
          </div>
        </div>
        <div className={styles["about-me__gradient"]} />
      </motion.section>
      <motion.section
        className={styles["studies"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="container">
          <div className={styles["studies__inner"]}>
            <motion.div
              className={styles["text"]}
              variants={rightToLeftAnimation}
            >
              {aboutMePageData.studies.text}
            </motion.div>
            <MProgressiveImage
              variants={leftToRightAnimation}
              placeholderSrc={aboutMePageData.studies.img.tiny}
              src={aboutMePageData.studies.img.path}
              alt={aboutMePageData.studies.img.alt}
            />
          </div>
        </div>
      </motion.section>
      <motion.section
        className={styles["frontend"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="container">
          <div className={styles["frontend__inner"]}>
            <motion.div
              className={styles["text"]}
              variants={leftToRightAnimation}
            >
              {aboutMePageData.frontend.text}
            </motion.div>
            <MProgressiveImage
              variants={rightToLeftAnimation}
              placeholderSrc={aboutMePageData.frontend.img.tiny}
              src={aboutMePageData.frontend.img.path}
              alt={aboutMePageData.frontend.img.alt}
            />
          </div>
        </div>
        <div className={styles["frontend__gradient"]} />
      </motion.section>
    </>
  );
};

export default AboutMePage;
