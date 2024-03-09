import { FC } from "react";

import styles from "./Promo.module.scss";
import { promoData } from "../../assets/data/data";
import Button from "../../components/Button/Button";
import Socials from "../../components/Socials/Socials";
import cn from "classnames";

const Promo: FC = () => {
  return (
    <section className={styles["promo"]}>
      <div className={cn("container", styles["promo__inner"])}>
        <div className={styles["promo__left-wrap"]}>
          <h3 className={styles["promo__sub-title"]}>{promoData.subTitle}</h3>
          <h1 className={styles["promo__title"]}>{promoData.title}</h1>
          <div className={styles["promo__text"]}>{promoData.text}</div>
          <div className={styles["promo__row"]}>
            <Button path={promoData.btn.path}>{promoData.btn.text}</Button>
            <Socials />
          </div>
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
    </section>
  );
};

export default Promo;
