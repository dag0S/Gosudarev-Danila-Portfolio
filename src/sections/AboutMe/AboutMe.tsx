import { FC } from "react";

import styles from "./AboutMe.module.scss";
import Title from "../../components/Title/Title";
import { aboutMeData } from "../../assets/data/data";
import Button from "../../components/Button/Button";

const AboutMe: FC = () => {
  return (
    <section className={styles["about-me"]}>
      <div className="container">
        <div className={styles["about-me__inner"]}>
          <Title className={styles["about-me__title"]}>
            {aboutMeData.title}
          </Title>
          <p className={styles["about-me__text"]}>{aboutMeData.text}</p>
          <Button path={aboutMeData.btn.path}>{aboutMeData.btn.text}</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
