import Button from "@shared/ui/Buttons/ReactButton/index";
import { FormInput } from "@shared/ui/Input/index";
import Icon from "react-icons";
// import Paragraph from "@shared/ui/Paragraph/index";

import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from "react-icons/fa";

export const FormComponent = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={styles.container}>
      <div className="flex items-end gap-4">
        <FormInput
          placeholder={t("contact-pc.placeholder1")}
          textAlign="center"
          type={currentLanguage === "ru" ? "phone" : "email"}
          name={currentLanguage === "ru" ? "phone" : "email"}
          required
          margin="mt-10"
        />
        <span className="text-lg text-white text-end mb-2">или</span>
        <FormInput
          placeholder={t("contact-pc.placeholder2")}
          textAlign="center"
          name="name"
          required
          margin="mt-10"
        />
      </div>
      <div className="w-full flex items-center mt-1">
        <span className="text-sm text-[#9E9E9E]">
          {t("contact-pc.subtitle")}
        </span>
        <span
          className="text-sm text-white cursor-pointer ml-1"
          onClick={() => window.open("https://wa.me/77772886600", "_blank")}
        >
          {t("contact-pc.subtitle2")}
        </span>
        <FaWhatsapp
          className="text-green-500 ml-1 cursor-pointer"
          style={{ fontSize: "0.8rem", color: "white" }}
          onClick={() => window.open("https://wa.me/77772886600", "_blank")}
        />
      </div>

      <Button
        text={t("contact-pc.submit")}
        buttonType="outline"
        margin="mt-10"
      />
    </div>
  );
};
