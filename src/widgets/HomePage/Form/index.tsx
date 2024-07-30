import React from "react";
import { FormComponent } from "@features/Form/index";

import styles from "./styles.module.scss";

export const Form = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>СВЯЖИТЕСЬ С НАМИ</span>
      <FormComponent />
    </div>
  );
};
