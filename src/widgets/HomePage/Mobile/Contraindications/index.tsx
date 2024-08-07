import React from "react";
import Paragraph from "@shared/ui/Paragraph";
import { ContraindicationsTab } from "@features/Tab__Components/ContraindicationsTab";
import Button from "@shared/ui/Buttons/ReactButton";
import { InformationBanner } from "@features/InformationBanner";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const ContraindicationsMobile = () => {
  return (
    <div className={styles.container}>
      <Fade className={styles.container__animation} delay={0.3}>
        <h5 className={styles.container__heading}>ПРОТИВОПОКАЗАНИЯ</h5>
      </Fade>
      <Fade className={styles.container__animation} delay={0.3}>
        <Paragraph
          width="80%"
          margin="m-auto pt-4"
          align="text-center"
          text="С медицинскими противопоказаниями можно ознакомиться в инструкции:"
          paragraphType="yellow"
        />
      </Fade>
      <ContraindicationsTab />
      <Button text="Приемущества" buttonType="outline" margin="mt-16" />
      <InformationBanner />
    </div>
  );
};
