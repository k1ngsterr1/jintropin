import Input from "@shared/ui/Input/index";
import Button from "@shared/ui/Buttons/ReactButton/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const FormComponentMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <p className={styles.container__paragraph}>
        <Fade>{t("contact-pc.paragraph")}</Fade>
      </p>
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
        margin="mt-16"
      />
    </div>
  );
};
