import { FC } from "react";
import { motion } from "framer-motion";

import { MTitle } from "../../components/Title/Title";
import { MTechnologyCard } from "../../components/TechnologyCard/TechnologyCard";
import { techStackData } from "../../assets/data/data";

import styles from "./TechStack.module.scss";

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

const leftToRightAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible:{
    x: 0,
    opacity: 1,
  },
};

const opacityAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
};

const TechStack: FC = () => {
  return (
    <motion.section
      className={styles["tech-stack"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <div className={styles["tech-stack__inner"]}>
          <MTitle
            className={styles["tech-stack__title"]}
            variants={bottomToTopAnimation}
          >
            {techStackData.title}
          </MTitle>
          <div className={styles["tech-stack__rows"]}>
            {techStackData.rows.map((row) => (
              <motion.div
                className={styles["tech-stack__row"]}
                key={row.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                variants={leftToRightAnimation}
                className={styles["tech-stack__row-title"]}>
                  {row.title}
                </motion.div>
                <div className={styles["tech-stack__grid-icons"]}>
                  {row.icons.map((item, i) => (
                    <MTechnologyCard
                      key={item.id}
                      item={item}
                      variants={opacityAnimation}
                      custom={i + 1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
