import {
  NavigationTab,
  SocialTab,
} from "@features/Tab__Components/NavigationTab/index";

import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href="#main" className={styles.footer__logo}>
          <Fade>{t("logo")}</Fade>
        </a>
        <NavigationTab />
        <SocialTab />
      </div>
    </footer>
  );
};
