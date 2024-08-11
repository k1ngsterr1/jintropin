import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";
import logo from "@assets/Footer/spark_logo.svg";
import {
  NavigationTab,
  SocialTabMobile,
} from "@features/Tab__Components/NavigationTab/index";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export const FooterMobile = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href="#main-mob" className={styles.footer__content__logo}>
          <Fade>{t("logo")}</Fade>
        </a>
        <NavigationTab />
        <SocialTabMobile />
      </div>
      <img src={DJIN} alt="img" className={styles.footer__img} />
      <a href="https://sparkstudio.kz/home" target="_blank">
        <img className={styles.footer__logo} src={logo} />
      </a>
    </footer>
  );
};
