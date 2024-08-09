import React from "react";
import { ChooseTab } from "@features/Tab__Components/ChooseTab";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const Choose = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>
        <Fade>{t("choose-pc.heading1")}</Fade>{" "}
        <span className={styles.container__heading__span}>
          <Fade>{t("choose-pc.heading2")}</Fade>
        </span>
      </span>
      <ChooseTab />
    </div>
  );
};
