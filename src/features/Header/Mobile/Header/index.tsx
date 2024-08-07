import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { HamburgerMenu } from "@features/HamburgerMenu";

export const HeaderMobile: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`${styles.header} ${isActive ? styles.active : ""}`}>
      <div className={styles.header__container}>
        <span className={styles.header__container__logo}>ДЖИНТРОПИН</span>
        <HamburgerMenu isActive={isActive} handleClick={handleClick} />
      </div>
    </header>
  );
};
