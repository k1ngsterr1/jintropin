import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "@features/HamburgerMenu";

export const HeaderMobile: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <header
      className={`${styles.header} ${isActive ? styles.active : ""}`}
      id="header-mob"
    >
      <div className={styles.header__container}>
        <span className={styles.header__container__logo}>{t("logo")}</span>
        <HamburgerMenu isActive={isActive} handleClick={handleClick} />
      </div>
    </header>
  );
};
