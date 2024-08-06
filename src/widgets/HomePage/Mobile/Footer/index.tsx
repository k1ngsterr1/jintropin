import React from "react";
import { ScrollLink } from "react-scroll";
import {
  NavigationTab,
  SocialTabMobile,
} from "@features/Tab__Components/NavigationTab/index";

import styles from "./styles.module.scss";

export const FooterMobile = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href="" className={styles.footer__logo}>
          Джинтропин
        </a>
        <NavigationTab />
        <SocialTabMobile />
      </div>
    </footer>
  );
};
