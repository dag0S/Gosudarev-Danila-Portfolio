import { FC } from "react";
import { MTitle } from "../../components/Title/Title";
import { aboutMeData } from "../../assets/data/data";
import { MButton } from "../../components/Button/Button";
import { motion } from "framer-motion";

import styles from "./AboutMe.module.scss";

const leftToRightAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    },
  }),
};

const AboutMe: FC = () => {
  return (
    <motion.section
      className={styles["about-me"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <div className={styles["about-me__inner"]}>
          <MTitle
            className={styles["about-me__title"]}
            custom={1}
            variants={leftToRightAnimation}
          >
            {aboutMeData.title}
          </MTitle>
          <div className={styles["about-me__row"]}>
            <motion.p
              className={styles["about-me__text"]}
              custom={2}
              variants={leftToRightAnimation}
            >
              {aboutMeData.text}
            </motion.p>
            <MButton
              custom={1}
              variants={leftToRightAnimation}
              path={aboutMeData.btn.path}
            >
              {aboutMeData.btn.text}
            </MButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
