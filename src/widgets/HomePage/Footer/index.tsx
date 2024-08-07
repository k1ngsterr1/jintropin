import React from "react";
import { ScrollLink } from "react-scroll";
import { NavigationTab } from "@features/Tab__Components/NavigationTab/index";
import { SocialTab } from "@features/Tab__Components/NavigationTab/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href="" className={styles.footer__logo}>
          <Fade>Джинтропин</Fade>
        </a>
        <NavigationTab />
        <SocialTab />
      </div>
    </footer>
  );
};
