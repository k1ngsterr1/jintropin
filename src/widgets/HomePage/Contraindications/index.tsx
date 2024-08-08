import React from "react";
import Paragraph from "@shared/ui/Paragraph";
import { ContraindicationsTab } from "@features/Tab__Components/ContraindicationsTab";
import Button from "@shared/ui/Buttons/ReactButton";
import { InformationBanner } from "@features/InformationBanner";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const Contraindications = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h5 className={styles.container__heading}>
        <Fade>{t("contraindications-pc.heading")}</Fade>
      </h5>
      <Paragraph
        width="25%"
        margin="m-auto pt-4"
        align="text-center"
        text={`${t("contraindications-pc.paragraph")}`}
        paragraphType="yellow"
      />
      <ContraindicationsTab />
      <Button
        text={`${t("contraindications-pc.contact")}`}
        buttonType="outline"
        margin="mt-16"
      />
      <InformationBanner />
    </div>
  );
};
