import Paragraph from "@shared/ui/Paragraph";
import LinkButton from "@shared/ui/Buttons/LinkButton";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const CertificateMobile = () => {
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
        width="60%"
        margin="mt-4"
        lineHeight="clamp(12px,5.60736vw,48px)"
      />
      <LinkButton
        text={`${t("certificate-pc.download_btn")}`}
        buttonType="outline"
        margin="mt-12"
      />
    </div>
  );
};
