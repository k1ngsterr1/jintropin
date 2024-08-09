import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Buttons/ReactButton";
import { useTranslation } from "react-i18next";
const VerificationMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.verification}>
      <div className={styles.verification__container}>
        <h2 className={styles.verification__heading}>
          <Fade>{t("verification.heading")}</Fade>
        </h2>
        <p className={styles.verification__paragraph}>
          <Fade>{t("verification.paragraph")}</Fade>
        </p>
        <ul className={styles.verification__instructions}>
          <li className={styles.verification__instructions__point}>
            <Fade>{t("verification.point1")}</Fade>
          </li>
          <li className={styles.verification__instructions__point}>
            <Fade>{t("verification.point2")}</Fade>
          </li>
        </ul>
        <Button
          text={t("verification.check")}
          buttonType="outline"
          margin="mt-4"
        />
      </div>
    </div>
  );
};
export default VerificationMobile;
