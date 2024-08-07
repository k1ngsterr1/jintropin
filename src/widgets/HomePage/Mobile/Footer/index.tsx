import React from "react";
import { ScrollLink } from "react-scroll";
import {
  NavigationTab,
  SocialTabMobile,
} from "@features/Tab__Components/NavigationTab/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";

export const FooterMobile = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href="" className={styles.footer__logo}>
          <Fade>Джинтропин</Fade>
        </a>
        <NavigationTab />
        <SocialTabMobile />
      </div>
      <img src={DJIN} alt="img" className={styles.footer__img} />
    </footer>
  );
};
