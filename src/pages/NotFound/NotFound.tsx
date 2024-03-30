import { FC } from "react";

import styles from "./NotFound.module.scss";
import Title from "../../components/Title/Title";
import { NotFoundData } from "../../assets/data/data";
import Button from "../../components/Button/Button";

const NotFound: FC = () => {
  return (
    <section className={styles["not-found"]}>
      <div className="container">
        <div className={styles["not-found__inner"]}>
          <Title>{NotFoundData.title}</Title>
          <div className={styles["not-found__text"]}>{NotFoundData.text}</div>
          <Button path={NotFoundData.btn.path}>{NotFoundData.btn.text}</Button>
        </div>
      </div>
      <div className={styles["not-found__gradient"]} />
    </section>
  );
};

export default NotFound;
