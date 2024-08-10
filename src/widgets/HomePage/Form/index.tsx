import { FormComponent } from "@features/Form/index";

import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

export const Form = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container} id="form">
      <span className={styles.container__heading}>
        <Fade>{t("contact-pc.heading")}</Fade>
      </span>
      <form>
        <FormComponent />
      </form>
    </div>
  );
};
