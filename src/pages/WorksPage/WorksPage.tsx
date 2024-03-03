import { FC } from "react";
import { worksPageData } from "../../assets/data/data";
import Title from "../../components/Title/Title";

import styles from "./WorksPage.module.scss";
import Categories from "../../components/Categories/Categories";

const WorksPage: FC = () => {
  return (
    <section className={styles["works"]}>
      <div className="container">
        <div className={styles["works__inner"]}>
          <Title className={styles["works__title"]}>
            {worksPageData.title}
          </Title>
          <Categories list={worksPageData.categories} />
          <div className={styles["works__grid"]}>
            {worksPageData.works.layouts.map((work) => (
              <div className={styles["work"]} key={work.id}>
                <div
                  className={styles["work__img"]}
                  style={{ backgroundImage: `url(${work.preview})` }}
                ></div>
                <h5 className={styles['work__title']}>{work.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
