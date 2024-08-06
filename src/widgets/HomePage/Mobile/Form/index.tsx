import React from "react";
import { FormComponentMobile } from "@features/Form/Mobile";

import styles from "./styles.module.scss";

const FormMobile = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>СВЯЖИТЕСЬ С НАМИ</span>
      <FormComponentMobile />
    </div>
  );
};
export default FormMobile;
