import Button from "@shared/ui/Buttons/ReactButton/index";
import Input, { TelInput } from "@shared/ui/Input/index";
import Paragraph from "@shared/ui/Paragraph/index";

import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

export const FormComponent = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={styles.container}>
      <Paragraph
        text={t("contact-pc.paragraph")}
        paragraphType="white"
        margin="mt-4 text-center !w-full"
      />
      <Input
        placeholder={t("contact-pc.placeholder1")}
        textAlign="center"
        name="name"
        required
        margin="mt-10"
      />
      <TelInput
        placeholder={t("contact-pc.placeholder2")}
        textAlign="center"
        type={currentLanguage === "ru" ? "phone" : "email"}
        name={currentLanguage === "ru" ? "phone" : "email"}
        required
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
