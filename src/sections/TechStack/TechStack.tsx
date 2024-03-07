import { FC } from "react";

import styles from "./TechStack.module.scss";
import Title from "../../components/Title/Title";
import { techStackData } from "../../assets/data/data";
import TechnologyCard from "../../components/TechnologyCard/TechnologyCard";

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
              <div className={styles["tech-stack__row"]} key={row.id}>
                <div className={styles["tech-stack__row-title"]}>
                  {row.title}
                </div>
                <div className={styles["tech-stack__grid-icons"]}>
                  {row.icons.map((item) => (
                    <TechnologyCard key={item.id} item={item} />
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
