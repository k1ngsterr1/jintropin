import { FormComponentMobile } from "@features/Form/Mobile";

import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const FormMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container} id="form-mob">
      <span className={styles.container__heading}>
        <Fade>{t("contact-pc.heading")}</Fade>
      </span>
      <FormComponentMobile />
    </div>
  );
};
export default FormMobile;
