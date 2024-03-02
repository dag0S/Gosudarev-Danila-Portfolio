import { FC } from "react";

import styles from "./TechStack.module.scss";
import Title from "../../components/Title/Title";
import { techStackData } from "../../assets/data/data";

const TechStack: FC = () => {
  return (
    <section className={styles["tech-stack"]}>
      <div className="container">
        <div className={styles["tech-stack__inner"]}>
          <Title className={styles["tech-stack__title"]}>
            {techStackData.title}
          </Title>
          <div className={styles["tech-stack__rows"]}>
            {techStackData.rows.map((row) => (
              <div className={styles["tech-stack__row"]}>
                <div className={styles["tech-stack__row-title"]}>
                  {row.title}
                </div>
                <div className={styles["tech-stack__grid-icons"]}>
                  {row.icons.map((item) => (
                    <div className={styles["tech-stack__icon"]} key={item.id}>
                      <img src={item.icon} alt={item.name} />
                      <div>{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
