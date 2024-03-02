import { FC } from "react";
import Title from "../../components/Title/Title";
import { workExamplesData } from "../../assets/data/data";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import styles from "./WorkExamples.module.scss";

const WorkExamples: FC = () => {
  return (
    <section className={styles["work-examples"]}>
      <div className="container">
        <div className={styles["work-examples__inner"]}>
          <Title className={styles["work-examples__title"]}>
            {workExamplesData.title}
          </Title>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
          >
            {workExamplesData.slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img src={slide.img} alt={slide.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WorkExamples;
