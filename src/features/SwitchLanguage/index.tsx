import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
interface Props {
  changeLanguage: (lng: string) => void;
}
const Switcher: React.FC<Props> = ({ changeLanguage }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div>
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
    </div>
  );
};
export default Switcher;
