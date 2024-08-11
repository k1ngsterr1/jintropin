import LinkButton from "@shared/ui/Buttons/LinkButton";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Verification = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.verification}>
      <div className={styles.verification__container}>
        <h2 className={styles.verification__heading}>
          <Fade delay={0.15}>{t("verification.heading")}</Fade>
        </h2>
        <p className={styles.verification__paragraph}>
          <Fade delay={0.2}>{t("verification.paragraph")}</Fade>
        </p>
        <ul className={styles.verification__instructions}>
          <li className={styles.verification__instructions__point}>
            <Fade delay={0.25}>{t("verification.point1")}</Fade>
          </li>
          <li className={styles.verification__instructions__point}>
            <Fade delay={0.3}>{t("verification.point2")}</Fade>
          </li>
        </ul>
        <Fade delay={0.35}>
          <>
            <LinkButton
              to="https://ppk365.com/jinsaiyaoye/"
              target="_blank"
              text={t("verification.check")}
              buttonType="outline"
              margin="mt-4"
            />
          </>
        </Fade>
      </div>
    </div>
  );
};
export default Verification;
