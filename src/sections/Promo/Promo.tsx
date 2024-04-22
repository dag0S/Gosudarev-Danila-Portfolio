import { FC } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

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
    <MouseParallaxContainer
      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave={true}
    >
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
            <div
              className={cn(styles["promo__text"], styles["promo__text--1"])}
            >
              {promoData.text1}
            </div>
            <div
              className={cn(styles["promo__text"], styles["promo__text--2"])}
            >
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
            <MouseParallaxChild factorX={0.1} factorY={0.1}>
              <img
                className={styles["promo__hero"]}
                src={promoData.hero.img}
                alt={promoData.hero.alt}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={styles["icon-html"]}
              factorX={0.2}
              factorY={0.3}
            >
              <img
                src={promoData.icons.html.icon}
                alt={promoData.icons.html.alt}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={styles["icon-js"]}
              factorX={0.3}
              factorY={0.4}
            >
              <img src={promoData.icons.js.icon} alt={promoData.icons.js.alt} />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={styles["icon-ts"]}
              factorX={0.2}
              factorY={0.3}
            >
              <img src={promoData.icons.ts.icon} alt={promoData.icons.ts.alt} />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={styles["icon-redux"]}
              factorX={0.2}
              factorY={0.3}
            >
              <img
                src={promoData.icons.redux.icon}
                alt={promoData.icons.redux.alt}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={styles["icon-css"]}
              factorX={0.3}
              factorY={0.4}
            >
              <img
                src={promoData.icons.css.icon}
                alt={promoData.icons.css.alt}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={styles["icon-react"]}
              factorX={0.2}
              factorY={0.2}
            >
              <img
                src={promoData.icons.react.icon}
                alt={promoData.icons.react.alt}
              />
            </MouseParallaxChild>
          </div>
        </div>
        <div className={styles["promo__gradient-1"]} />
        <div className={styles["promo__gradient-2"]} />
      </motion.section>
    </MouseParallaxContainer>
  );
};

export default Promo;
