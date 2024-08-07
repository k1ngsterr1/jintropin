import React from "react";
import { cardsData } from "@shared/lib/content/ContraindicationsContent";
import { ContraindicationsCards } from "@shared/ui/ContraindicationsCards/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const ContraindicationsTab = () => {
  return (
    <div className={styles.grid}>
      {cardsData.map((item, index) => (
        <Fade className={styles.animation}>
          <div key={index} className={styles.grid__items}>
            <ContraindicationsCards
              description={item.description}
              img={item.img}
              title={item.title}
            />
          </div>
        </Fade>
      ))}
    </div>
  );
};
