import React from "react";
import { ScrollLink } from "react-scroll";
import { NavigationTab } from "@features/Tab__Components/NavigationTab/index";
import { SocialTab } from "@features/Tab__Components/NavigationTab/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <Link to="/home" className={styles.footer__logo}>
          <Fade>{t("logo")}</Fade>
        </Link>
        <NavigationTab />
        <SocialTab />
      </div>
    </footer>
  );
};
