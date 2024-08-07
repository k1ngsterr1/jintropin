import React from "react";
import bannerData from "@shared/lib/content/InformationBanner";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const InformationBanner = () => {
  return (
    <div className={styles.container}>
      {bannerData.map((item) => (
        <div key={item.id} className="">
          <Fade>
            <p className={styles.container__text}>{item.text}</p>
          </Fade>
        </div>
      ))}
    </div>
  );
};
