import Paragraph from "@shared/ui/Paragraph";

import { LinkButton } from "@shared/ui/Buttons/RedirectButton";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

export const Certificate = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h6 className={styles.container__heading}>
        <Fade>{t("certificate-pc.heading")}</Fade>
      </h6>
      <Paragraph
        align="text-center"
        paragraphType="white"
        text={`${t("certificate-pc.paragraph")}`}
        width="40%"
        margin="mt-4"
        lineHeight="clamp(13.5px,1.40616vw,54px)"
      />
      <LinkButton
        to="/certificate"
        text={`${t("certificate-pc.download_btn")}`}
        buttonType="outline"
        margin="mt-12"
      />
    </div>
  );
};
