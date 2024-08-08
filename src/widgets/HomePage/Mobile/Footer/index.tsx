import {
  NavigationTab,
  SocialTabMobile,
} from "@features/Tab__Components/NavigationTab/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";
import { Link } from "react-router-dom";

export const FooterMobile = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <Link to="/home" className={styles.footer__logo}>
          <Fade>Джинтропин</Fade>
        </Link>
        <NavigationTab />
        <SocialTabMobile />
      </div>
      <img src={DJIN} alt="img" className={styles.footer__img} />
    </footer>
  );
};
