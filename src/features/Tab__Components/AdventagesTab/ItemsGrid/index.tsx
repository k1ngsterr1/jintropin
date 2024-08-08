import React from "react";
import { items } from "@shared/lib/content/AdvantagesCardsContent";
import { AdvantagesCards } from "@shared/ui/AdvantagesCards/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { Language } from "i18n";
import { useTranslation } from "react-i18next";

const ItemsGrid: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = items[currentLanguage] || items.en;
  return (
    <div className={styles.grid}>
      {content.map((item) => (
        <Fade cascade key={item.id}>
          <AdvantagesCards
            image={item.image}
            title={item.title}
            number={item.number}
          />
        </Fade>
      ))}
    </div>
  );
};

export default ItemsGrid;
