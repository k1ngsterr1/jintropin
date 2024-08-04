import { GrayCard } from "@shared/ui/GrayCards/index";
import { Fade } from "react-awesome-reveal";
import cardsData from "@shared/lib/content/GrayCardsContent";

import styles from "./styles.module.scss";

export const GrayCardGrid = () => {
  return (
    <div className={styles.grid}>
      {cardsData.map((item, index) => (
        <Fade cascade>
          <div key={index} className={styles.grid__items}>
            <GrayCard
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
