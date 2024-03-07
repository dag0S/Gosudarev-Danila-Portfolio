import { FC } from "react";
import { worksPageData } from "../../assets/data/data";
import Title from "../../components/Title/Title";
import Categories from "../../components/Categories/Categories";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from '../../redux/store'

import styles from "./WorksPage.module.scss";

const WorksPage: FC = () => {
  const category = useSelector((state: RootState) => state.works.categories)

  return (
    <section className={styles["works"]}>
      <div className="container">
        <div className={styles["works__inner"]}>
          <Title className={styles["works__title"]}>
            {worksPageData.title}
          </Title>
          <Categories list={worksPageData.categories} />
          <div className={styles["works__grid"]}>
            {worksPageData.works.filter(work => work.category === category).map((work) => (
              <Link
                to={`/works/${work.id}`}
                className={styles["work"]}
                key={work.id}
              >
                <div className={styles["work__img-wrap"]}>
                  <div
                    className={styles["work__img"]}
                    style={{ backgroundImage: `url(${work.preview})` }}
                  />
                  <div className={styles["work__img-overlay"]} />
                  <Button className={styles["work__img-btn"]}>
                    {worksPageData.btnText}
                  </Button>
                </div>
                <h5 className={styles["work__title"]}>{work.name}</h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["works__gradient"]} />
    </section>
  );
};

export default WorksPage;
