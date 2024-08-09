import React from "react";
import Paragraph from "@shared/ui/Paragraph";
import { ContraindicationsTab } from "@features/Tab__Components/ContraindicationsTab";
import Button from "@shared/ui/Buttons/ReactButton";
import { InformationBanner } from "@features/InformationBanner";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const ContraindicationsMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Fade className={styles.container__animation} delay={0.3}>
        <h5 className={styles.container__heading}>
          {t("contraindications-pc.heading")}
        </h5>
      </Fade>
      <Fade className={styles.container__animation} delay={0.3}>
        <Paragraph
          width="80%"
          margin="m-auto pt-4"
          align="text-center"
          text={t("contraindications-pc.paragraph")}
          paragraphType="yellow"
        />
      </Fade>
      <ContraindicationsTab />
      <Button
        text={t("contraindications-pc.contact")}
        buttonType="outline"
        margin="mt-16"
      />
      <InformationBanner />
    </div>
  );
};
