import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { Loader } from "@shared/ui/Loader/index";

interface Props {
  changeLanguage: (lng: string) => void;
}

const Switcher: React.FC<Props> = ({ changeLanguage }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <>
      {currentLanguage !== "en" && (
        <button className={styles.btn} onClick={() => changeLanguage("en")}>
          EN
        </button>
      )}
      {currentLanguage !== "ru" && (
        <button className={styles.btn} onClick={() => changeLanguage("ru")}>
          RU
        </button>
      )}
    </>
  );
};

export default Switcher;
