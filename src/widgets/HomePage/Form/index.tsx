import React from "react";
import { FormComponent } from "@features/Form/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const Form = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>
        <Fade>СВЯЖИТЕСЬ С НАМИ</Fade>
      </span>
      <FormComponent />
    </div>
  );
};
