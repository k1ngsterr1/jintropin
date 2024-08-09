import React from "react";
import {
  ChooseTab,
  ChooseTabMobile,
} from "@features/Tab__Components/ChooseTab";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const ChooseMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>
        <Fade>{t("choose-pc.heading1")}</Fade>{" "}
        <span className={styles.container__heading__span}>
          <Fade>{t("choose-pc.heading2")}</Fade>
        </span>
      </span>
      <div className={styles.mob}>
        <ChooseTabMobile />
      </div>
      <div className={styles.ipad}>
        <ChooseTab />
      </div>
    </div>
  );
};
