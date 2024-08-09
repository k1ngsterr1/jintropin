import React from "react";
import { FormComponent } from "@features/Form/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>
        <Fade>{t("contact-pc.heading")}</Fade>
      </span>
      <FormComponent />
    </div>
  );
};
