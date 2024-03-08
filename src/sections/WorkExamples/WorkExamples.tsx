import { FC } from "react";
import Title from "../../components/Title/Title";
import { workExamplesData, worksPageData } from "../../assets/data/data";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";

import styles from "./WorkExamples.module.scss";
import Button from "../../components/Button/Button";

const WorkExamples: FC = () => {
  return (
    <section className={styles["work-examples"]}>
      <div className="container">
        <div className={styles["work-examples__inner"]}>
          <Title className={styles["work-examples__title"]}>
            {workExamplesData.title}
          </Title>

          <Swiper
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
          >
            {worksPageData.works.map(
              (slide, i) =>
                i <= 3 && (
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
        </div>
      </div>
      <div className={styles["work-examples__gradient-1"]} />
      <div className={styles["work-examples__gradient-2"]} />
    </section>
  );
};

export default WorkExamples;
