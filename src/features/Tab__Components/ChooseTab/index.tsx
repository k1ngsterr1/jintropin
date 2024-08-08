import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { photoCards } from "@shared/lib/content/ChooseCardsContent";
import { useCustomButton } from "@shared/lib/hooks/useCustomButton";
import { ChooseCard } from "@shared/ui/ChooseCard/index";

import left from "@assets/Choose/ArrowLeft.svg";
import right from "@assets/Choose/ArrowRight.svg";

import styles from "./styles.module.scss";
import "@splidejs/react-splide/css";

export const ChooseTab = () => {
  const { splideRef, goPrev, goNext } = useCustomButton();

  return (
    <div className={styles.container}>
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
            width: 1300,
            focus: "center",
            perPage: 3,
            perMove: 1,
            pagination: false,
            arrows: false,
          }}
        >
          {photoCards.map((item) => (
            <SplideSlide key={item.id}>
              <ChooseCard photo={item.photo} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export const ChooseTabMobile = () => {
  const { splideRef, goPrev, goNext } = useCustomButton();

  return (
    <div className={styles.container}>
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
            width: 1300,
            focus: "center",
            perPage: 1,
            perMove: 1,
            pagination: false,
            arrows: false,
          }}
        >
          {photoCards.map((item) => (
            <SplideSlide key={item.id}>
              <ChooseCard photo={item.photo} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
