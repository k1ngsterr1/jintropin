import { FormComponent } from "@features/Form/index";

import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import body from "@assets/Contact/pexels-panther-1547248.jpg";

export const Form = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container} id="form">
      <div className={styles.container__left}>
        <img src={body} alt="img" className="w-full" />
      </div>
      <div className={styles.container__right}>
        <span className={styles.container__heading}>
          <Fade>{t("contact-pc.heading")}</Fade>
        </span>
        <Fade>
          <span className={styles.container__paragraph}>
            {t("contact-pc.paragraph")}
          </span>
        </Fade>
        <form>
          <FormComponent />
        </form>
      </div>
    </div>
  );
};
