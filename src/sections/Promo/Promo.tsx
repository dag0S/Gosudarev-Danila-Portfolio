import { FC } from "react";
import cn from "classnames";
import { motion } from "framer-motion";

import { promoData } from "../../assets/data/data";
import Button from "../../components/Button/Button";
import Socials from "../../components/Socials/Socials";

import styles from "./Promo.module.scss";

const bottomToTopAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
    },
  }),
};

const Promo: FC = () => {
  return (
    <motion.section
      className={styles["promo"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={cn("container", styles["promo__inner"])}>
        <div className={styles["promo__left-wrap"]}>
          <motion.h3
            className={styles["promo__sub-title"]}
            variants={bottomToTopAnimation}
            custom={1}
          >
            {promoData.subTitle}
          </motion.h3>
          <motion.h1
            variants={bottomToTopAnimation}
            custom={2}
            className={styles["promo__title"]}
          >
            {promoData.title}
          </motion.h1>
          <div className={cn(styles["promo__text"], styles["promo__text--1"])}>
            {promoData.text1}
          </div>
          <div className={cn(styles["promo__text"], styles["promo__text--2"])}>
            {promoData.text2}
          </div>
          <motion.div
            variants={bottomToTopAnimation}
            custom={3}
            className={styles["promo__row"]}
          >
            <Button path={promoData.btn.path}>{promoData.btn.text}</Button>
            <Socials />
          </motion.div>
        </div>
        <div className={styles["promo__right-wrap"]}>
          <img
            className={styles["promo__hero"]}
            src={promoData.hero.img}
            alt={promoData.hero.alt}
          />
          <img
            className={styles["icon-html"]}
            src={promoData.icons.html.icon}
            alt={promoData.icons.html.alt}
          />
          <img
            className={styles["icon-js"]}
            src={promoData.icons.js.icon}
            alt={promoData.icons.js.alt}
          />
          <img
            className={styles["icon-ts"]}
            src={promoData.icons.ts.icon}
            alt={promoData.icons.ts.alt}
          />
          <img
            className={styles["icon-css"]}
            src={promoData.icons.css.icon}
            alt={promoData.icons.css.alt}
          />
          <img
            className={styles["icon-redux"]}
            src={promoData.icons.redux.icon}
            alt={promoData.icons.redux.alt}
          />
          <img
            className={styles["icon-react"]}
            src={promoData.icons.react.icon}
            alt={promoData.icons.react.alt}
          />
        </div>
      </div>
      <div className={styles["promo__gradient-1"]} />
      <div className={styles["promo__gradient-2"]} />
    </motion.section>
  );
};

export default Promo;
