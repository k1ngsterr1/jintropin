import React from "react";
import Selector from "@shared/ui/Selector";
import { options } from "@shared/lib/content/QuestionsContent";

import styles from "./styles.module.scss";

import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";

export const QuestionsTab = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = options[currentLanguage] || options.en;
  return (
    <div className={styles.container}>
      <img src={DJIN} alt="djin" className={styles.container__img} />
      <span className={styles.container__heading}>{t("questions")}</span>

      {content.map((option) => (
        <div className={styles.container__items} key={option.id}>
          <Selector
            placeholder={option.options[0].placeholder}
            options={option.options}
          />
        </div>
      ))}
    </div>
  );
};
