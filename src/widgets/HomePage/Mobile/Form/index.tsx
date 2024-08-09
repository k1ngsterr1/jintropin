import React from "react";
import { FormComponentMobile } from "@features/Form/Mobile";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const FormMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>
        <Fade>{t("contact-pc.heading")}</Fade>
      </span>
      <FormComponentMobile />
    </div>
  );
};
export default FormMobile;
