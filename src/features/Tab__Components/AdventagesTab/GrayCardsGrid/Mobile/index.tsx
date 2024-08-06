import { Fade } from "react-awesome-reveal";
import cardsData from "@shared/lib/content/GrayCardsContent";

import styles from "./styles.module.scss";
import { GrayCardMobile } from "@shared/ui/GrayCardsMobile";

export const GrayCardGridMobile = () => {
  return (
    <div className={styles.grid}>
      {cardsData.map((item, index) => (
        <Fade cascade className={styles.grid__animation}>
          <div key={index} className={styles.grid__items}>
            <GrayCardMobile
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
