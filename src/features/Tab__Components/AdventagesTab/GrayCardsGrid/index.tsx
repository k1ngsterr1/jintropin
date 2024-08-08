import { GrayCard } from "@shared/ui/GrayCards/index";
import { Fade } from "react-awesome-reveal";
import cardsData from "@shared/lib/content/GrayCardsContent";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";

export const GrayCardGrid = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = cardsData[currentLanguage] || cardsData.en;
  return (
    <div className={styles.grid}>
      {content.map((item, index) => (
        <Fade cascade>
          <div key={index} className={styles.grid__items}>
            <GrayCard
              description={item.description}
              img={item.image}
              title={item.title}
            />
          </div>
        </Fade>
      ))}
    </div>
  );
};
