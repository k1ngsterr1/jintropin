import { cardsData } from "@shared/lib/content/ContraindicationsContent";
import { ContraindicationsCards } from "@shared/ui/ContraindicationsCards/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";

export const ContraindicationsTab = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = cardsData[currentLanguage] || cardsData.en;
  return (
    <div className={styles.grid}>
      {content.map((item, index) => (
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
