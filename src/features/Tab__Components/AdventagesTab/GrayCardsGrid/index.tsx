import React from "react";
import cardsData from "@shared/lib/content/GrayCardsContent";
import { GrayCard } from "@shared/ui/GrayCards/index";

import styles from "./styles.module.scss";

export const GrayCardGrid = () => {
  return (
    <div className={styles.grid}>
      {cardsData.map((item) => (
        <div key={item.id} className={styles.grid__items}>
          <GrayCard
            description={item.description}
            img={item.img}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
};
