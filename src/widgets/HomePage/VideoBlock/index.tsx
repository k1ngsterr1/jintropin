import reelsData from "@shared/lib/content/ReelsCardsContent";
import { useCustomButton } from "@shared/lib/hooks/useCustomButton";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { VideoCard } from "../../../shared/ui/VideoCard/index";

import left from "@assets/Choose/ArrowLeft.svg";
import right from "@assets/Choose/ArrowRight.svg";

import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";

import "@splidejs/react-splide/css";
import { Language } from "i18n";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

export const VideoBlock = () => {
  const { splideRef, goPrev, goNext } = useCustomButton();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = reelsData[currentLanguage] || reelsData.en;
  return (
    <div className={styles.container}>
      <img src={DJIN} alt="djin" className={styles.container__img} />
      <div className={styles.container__items}>
        <img
          onClick={goPrev}
          className={`${styles.customButton} ${styles.prev}`}
          src={left}
          alt=""
        />
        <img
          onClick={goNext}
          className={`${styles.customButton} ${styles.next}`}
          src={right}
          alt=""
        />
        <Splide
          ref={splideRef}
          aria-label="My Favorite Images"
          options={{
            width: 1500,
            focus: "center",
            perPage: 3,
            perMove: 1,
            pagination: false,
            arrows: false,
          }}
        >
          {content.map((item) => (
            <SplideSlide key={item.id}>
              <VideoCard
                img={item.img}
                separator={item.separator}
                textColor={item.textColor}
                text={item.text}
                to={item.to}
                buttonColor={item.buttonColor}
                lng={currentLanguage}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
