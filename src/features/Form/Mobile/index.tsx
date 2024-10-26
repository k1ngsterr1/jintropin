import Input from "@shared/ui/Input/index";
import Button from "@shared/ui/Buttons/ReactButton/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useMail } from "@shared/lib/hooks/useMain";

export const FormComponentMobile = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { t } = useTranslation();
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevents the default page reload
    console.log("Form submit prevented");
    console.log(input1, input2);
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
        to_name: "sales@jintropin.kz.",
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
      <p className={styles.container__paragraph}>
        <Fade>{t("contact-pc.paragraph")}</Fade>
      </p>
      <Input
        placeholder={t("contact-pc.placeholder1")}
        textAlign="center"
        margin="mt-10"
        onChange={(e) => {
          setInput1(e.target.value), console.log(e.target.value);
        }}
        name="credentials1"
      />
      <Input
        placeholder={t("contact-pc.placeholder2")}
        textAlign="center"
        margin="mt-10"
        onChange={(e) => {
          setInput2(e.target.value), console.log(e.target.value);
        }}
        name="credentials2"
      />
      <Button
        type="submit"
        text={t("contact-pc.submit")}
        buttonType="outline"
        margin="mt-16"
      />
      {error && (
        <p className="mt-8  w-[70%] text-center text-red-500 text-sm">
          {error}
        </p>
      )}
    </form>
  );
};
