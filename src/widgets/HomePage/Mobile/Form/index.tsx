import React from "react";
import { FormComponentMobile } from "@features/Form/Mobile";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

const FormMobile = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__heading}>
        <Fade>СВЯЖИТЕСЬ С НАМИ</Fade>
      </span>
      <FormComponentMobile />
    </div>
  );
};
export default FormMobile;
