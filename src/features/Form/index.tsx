import Button from "@shared/ui/Buttons/ReactButton/index";
import { FormInput } from "@shared/ui/Input/index";
import Icon from "react-icons";
// import Paragraph from "@shared/ui/Paragraph/index";

import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useMail } from "@shared/lib/hooks/useMain";

export const FormComponent = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevents the default page reload
    console.log("Form submit prevented");
    if (!input1 && !input2) {
      setError(t("contact-pc.error"));
    } else {
      setError("");
    }
    const data = {
      service_id: "service_jsdhhs8",
      template_id: "template_b2vc67r",
      user_id: "sRKeBlg3dRT4CPOig",
      template_params: {
        from_name: "client",
        credentials1: input1,
        credentials2: input2,
        to_name: "sales@jintropin.kz",
      },
    };

    const result = await useMail(data);

    if (result === "Success") {
      setInput1("");
      setInput2("");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className="flex items-end gap-4">
        <FormInput
          placeholder={t("contact-pc.placeholder1")}
          textAlign="center"
          name="credentials1"
          onChange={(e) => {
            setInput1(e.target.value), console.log(e.target.value);
          }}
          margin="mt-10"
        />
        <span className="text-lg text-white text-end mb-2">
          {currentLanguage === "ru" ? "или" : "and"}
        </span>
        <FormInput
          placeholder={t("contact-pc.placeholder2")}
          textAlign="center"
          type={currentLanguage === "ru" ? "phone" : "email"}
          name="credentials2"
          onChange={(e) => {
            setInput2(e.target.value), console.log(e.target.value);
          }}
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
        type="button" // Temporarily use "button" to prevent form submission
        text={t("contact-pc.submit")}
        buttonType="outline"
        margin="mt-10"
        onClick={handleSubmit}
      />
      {error && (
        <p className="mt-4 text-center text-red-500 text-sm w-full">{error}</p>
      )}
    </form>
  );
};
