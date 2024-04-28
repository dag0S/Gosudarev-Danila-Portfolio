import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { motion } from "framer-motion";

import { worksPageData } from "../../assets/data/data";
import {MCategories} from "../../components/Categories/Categories";
import { MTitle } from "../../components/Title/Title";
import ProgressiveImage from "../../components/ProgressiveImage/ProgressiveImage";

import styles from "./WorksPage.module.scss";

const bottomToTopAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const leftToRightAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const WorksPage: FC = () => {
  const category = useSelector((state: RootState) => state.works.categories);

  return (
    <motion.section
      className={styles["works"]}
      initial="hidden"
      whileInView="visible"
    >
      <div className="container">
        <div className={styles["works__inner"]}>
          <MTitle
            className={styles["works__title"]}
            variants={bottomToTopAnimation}
          >
            {worksPageData.title}
          </MTitle>
          <MCategories
            list={worksPageData.categories}
            variants={leftToRightAnimation}
          />
          <div className={styles["works__grid"]}>
            {worksPageData.works
              .filter((work) => work.category === category)
              .map((work) => (
                <motion.div
                  variants={bottomToTopAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <Link
                    to={`/works/${work.id}`}
                    className={styles["work"]}
                    key={work.id}
                  >
                    <div className={styles["work__img-wrap"]}>
                      <ProgressiveImage
                        className={styles["work__img"]}
                        src={work.preview}
                        placeholderSrc={work.tinyPreview}
                      />
                    </div>
                    <h5 className={styles["work__title"]}>{work.name}</h5>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles["works__gradient"]} />
    </motion.section>
  );
};

export default WorksPage;
