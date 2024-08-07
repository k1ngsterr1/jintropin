import React from "react";
import { ChooseTab } from "@features/Tab__Components/ChooseTab";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const Choose = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>
        <Fade>ЧЕМПИОНЫ ВЫБИРАЮТ</Fade>{" "}
        <span className={styles.container__heading__span}>
          <Fade>ДЖИНТРОПИН</Fade>
        </span>
      </span>
      <ChooseTab />
    </div>
  );
};
