import { FC } from "react";

import styles from "./Newsletter.module.scss";
import Button from "../../components/Button/Button";
import { newsletterData } from "../../assets/data/data";
import { Link } from "react-router-dom";

const Newsletter: FC = () => {
  return (
    <section className={styles["news"]}>
      <div className={styles["news__container"]}>
        <div className={styles["news__inner"]}>
          <h4 className={styles["news__title"]}>{newsletterData.title}</h4>
          <div className={styles["news__text"]}>{newsletterData.text}</div>
          <form className={styles["news__form"]} action="#">
            <div className={styles["news__form-row"]}>
              <input
                className={styles["news__form-input"]}
                name="email"
                type="email"
                placeholder={newsletterData.placeholder}
              />
              <Button>{newsletterData.btnText}</Button>
            </div>
            <div>
              <input
                className={styles["news__checkbox"]}
                type="checkbox"
                id="isAccepted"
                name="isAccepted"
              />
              <label htmlFor="isAccepted">
                Соглашаюсь на условия &nbsp;
                <span>
                  <Link to="/">политики конфиденциальности</Link>
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["news__gradient-1"]} />
      <div className={styles["news__gradient-2"]} />
    </section>
  );
};

export default Newsletter;
