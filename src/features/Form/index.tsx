import React from "react";
import Paragraph from "@shared/ui/Paragraph/index";
import Input from "@shared/ui/Input/index";
import Button from "@shared/ui/Buttons/ReactButton/index";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const FormComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Paragraph
        text={t("contact-pc.paragraph")}
        paragraphType="white"
        margin="mt-4"
      />
      <Input
        placeholder={t("contact-pc.placeholder1")}
        textAlign="center"
        margin="mt-10"
      />
      <Input
        placeholder={t("contact-pc.placeholder2")}
        textAlign="center"
        margin="mt-10"
      />
      <Button
        text={t("contact-pc.submit")}
        buttonType="outline"
        margin="mt-10"
      />
    </div>
  );
};
