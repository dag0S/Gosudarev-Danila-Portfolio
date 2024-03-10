import { FC } from "react";
import { workPageData, worksPageData } from "../../assets/data/data";
import { Link, useParams } from "react-router-dom";

import styles from "./WorkPage.module.scss";
import Title from "../../components/Title/Title";
import TechnologyCard from "../../components/TechnologyCard/TechnologyCard";

const WorkPage: FC = () => {
  const { id } = useParams();
  const work = worksPageData.works.find((item) => item.id.toString() === id);

  return (
    <section className={styles["work"]}>
      <div className="container">
        <div className={styles["work__inner"]}>
          <Link className={styles["work__back"]} to={workPageData.btnBack.url}>
            <img src={workPageData.btnBack.icon} />
            {workPageData.btnBack.text}
          </Link>
          <div className={styles["work__row"]}>
            <img
              className={styles["work__img"]}
              src={work?.img}
              alt={work?.name}
            />
            <div className={styles["work__wrap-text"]}>
              <Title className={styles["work__title"]}>{work?.name}</Title>
              <p className={styles["work__desc"]}>{work?.desc}</p>
              <div className={styles["work__wrap-btn"]}>
                <a
                  className={styles["work__btn-demo"]}
                  href={work?.linkDemo}
                  target="_blank"
                >
                  {workPageData.btnDemo.text}
                  <img src={workPageData.btnDemo.icon} />
                </a>
                <a
                  className={styles["work__btn-github"]}
                  href={work?.linkGitHub}
                  target="_blank"
                >
                  {workPageData.btnGitHub.text}
                  <img src={workPageData.btnGitHub.icon} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["work__wrap-bottom"]}>
            <h4 className={styles["work__sub-title"]}>
              {workPageData.sybTitle}
            </h4>
            <div className={styles["work__wrap-icons"]}>
              {work?.stack.map((item) => (
                <TechnologyCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["work__gradient"]} />
    </section>
  );
};

export default WorkPage;
