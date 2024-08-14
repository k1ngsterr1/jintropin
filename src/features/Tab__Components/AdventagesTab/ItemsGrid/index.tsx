import { items } from "@shared/lib/content/AdvantagesCardsContent";
import { AdvantagesCards } from "@shared/ui/AdvantagesCards/index";
import React from "react";

import { Language } from "i18n";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const ItemsGrid: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = items[currentLanguage] || items.en;
  return (
    <div className={styles.grid}>
      {content.map((item) => (
        <Fade cascade key={item.id} className="flex h-full">
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
