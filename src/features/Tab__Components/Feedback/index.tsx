import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { feedbacks } from "@shared/lib/content/Feedback/feedback";

export const SwiperFeedback = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.prev} custom-button-prev`}>
        <FaArrowLeft />
      </div>
      <div className={`${styles.next} custom-button-next`}>
        <FaArrowRight />
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        navigation={{
          prevEl: ".custom-button-prev",
          nextEl: ".custom-button-next",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const SwiperFeedbackMobile = () => {
  return (
    <div className={styles.container_mob}>
      <div className={`${styles.prev_mob} custom-button-prev`}>
        <FaArrowLeft className={styles.icon} />
      </div>
      <div className={`${styles.next_mob} custom-button-next`}>
        <FaArrowRight className={styles.icon} />
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: ".custom-button-prev",
          nextEl: ".custom-button-next",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt="img"
              className={styles.container_mob__img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
