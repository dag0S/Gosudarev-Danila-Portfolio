import { FC } from "react";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { workExamplesData, worksPageData } from "../../assets/data/data";
import { motion } from "framer-motion";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";

import styles from "./WorkExamples.module.scss";

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

const WorkExamples: FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={styles["work-examples"]}
    >
      <div className="container">
        <motion.div
          variants={bottomToTopAnimation}
          custom={1}
          className={styles["work-examples__inner"]}
        >
          <Title className={styles["work-examples__title"]}>
            {workExamplesData.title}
          </Title>

          <Swiper
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
          >
            {worksPageData.works.map(
              (slide, i) =>
                (i === 0 || i === 8 || i === 7 || i === 10) && (
                  <SwiperSlide key={slide.id}>
                    <div className={styles["slide"]}>
                      <img
                        className={styles["slide__img"]}
                        src={slide.img}
                        alt={slide.name}
                      />
                      <div className={styles["slide__wrap-text"]}>
                        <h4 className={styles["slide__title"]}>{slide.name}</h4>
                        <div className={styles["slide__desc"]}>
                          {slide.desc}
                        </div>
                        <Button path={workExamplesData.btn.link}>
                          {workExamplesData.btn.text}
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </motion.div>
      </div>
      <div className={styles["work-examples__gradient-1"]} />
      <div className={styles["work-examples__gradient-2"]} />
    </motion.section>
  );
};

export default WorkExamples;
