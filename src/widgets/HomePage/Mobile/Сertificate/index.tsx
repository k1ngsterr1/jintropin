import React from "react";
import Paragraph from "@shared/ui/Paragraph";
import LinkButton from "@shared/ui/Buttons/LinkButton";

import styles from "./styles.module.scss";

export const CertificateMobile = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.container__heading}>СЕРТИФИКАТЫ КАЧЕСТВА</h6>
      <Paragraph
        align="text-center"
        paragraphType="white"
        text="Джинтропин соответствует самым высоким стандартам качества. Это подтверждается следующими документами:"
        width="60%"
        margin="mt-4"
        lineHeight="clamp(12px,5.60736vw,48px)"
      />
      <LinkButton text="Скачать" buttonType="outline" margin="mt-12" />
    </div>
  );
};
