import React from "react";
import { navigation } from "@shared/lib/content/links/index";
import {
  adaptedItems,
  socialItems,
} from "../../../shared/lib/content/SocialTabContent/items";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";

export const NavigationTab: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = navigation[currentLanguage] || navigation.en;
  return (
    <nav className={styles.navigation}>
      {content.map((link) => (
        <a href={link.href} className={styles.navigation__link}>
          <Fade>{link.label}</Fade>
        </a>
      ))}
    </nav>
  );
};

export const SocialTab: React.FC = () => (
  <nav className={styles.nav}>
    {socialItems.map((item, index) => (
      <div key={index} className={styles.iconContainer}>
        {item.icons.map((icon, idx) => (
          <div key={idx}>
            <Fade>{icon}</Fade>
          </div>
        ))}
      </div>
    ))}
  </nav>
);

export const SocialTabMobile: React.FC = () => (
  <nav className={styles.nav_mobile}>
    {adaptedItems.map((item, index) => (
      <div key={index} className={styles.iconContainer_mobile}>
        {item.icons.map((icon, idx) => (
          <div key={idx}>
            <Fade>{icon}</Fade>
          </div>
        ))}
      </div>
    ))}
  </nav>
);
