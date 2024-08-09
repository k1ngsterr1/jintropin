import React from "react";
import LinkButton from "@shared/ui/Buttons/LinkButton";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const Questions = () => {
  const handleRedirect = () => {
    window.location.href = "/questions";
  };
  const { i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>
        <Fade>{i18n.language === "en" ? "QUESTIONS" : "ВОПРОСЫ"}</Fade>
      </span>
      <LinkButton
        margin="mt-10"
        onClick={handleRedirect}
        text="Q/A"
        buttonType="filled"
      />
    </div>
  );
};
