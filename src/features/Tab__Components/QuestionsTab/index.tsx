import React from "react";
import Selector from "@shared/ui/Selector";
import { options } from "@shared/lib/content/QuestionsContent";

import styles from "./styles.module.scss";

import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";
import { Fade } from "react-awesome-reveal";
import Button from "@shared/ui/Buttons/ReactButton";

export const QuestionsTab = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = options[currentLanguage] || options.en;
  return (
    <div className={styles.container}>
      <img src={DJIN} alt="djin" className={styles.container__img} />
      <span className={styles.container__heading}>{t("questions")}</span>

      {content.map((option) => (
        // <Fade className="w-full">
        <div className={styles.container__items} key={option.id}>
          <Selector
            placeholder={option.options[0].placeholder}
            options={option.options}
          />
        </div>
        // </Fade>
      ))}
    </div>
  );
};
export const QuestionsTabMain = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = options[currentLanguage] || options.en;
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>{t("questions")}</span>

      {content.slice(0, 5).map((option) => (
        // <Fade className="w-full">
        <div className={styles.container__items} key={option.id}>
          <Selector
            placeholder={option.options[0].placeholder}
            options={option.options}
          />
        </div>
        // </Fade>
      ))}
      <Button
        text={currentLanguage === "en" ? "Q/A" : "Вопросы/Ответы"}
        buttonType="outline"
        margin="mt-12"
      />
    </div>
  );
};
