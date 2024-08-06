import React from "react";
import { navigation } from "@shared/lib/content/links/index";
import {
  adaptedItems,
  socialItems,
} from "../../../shared/lib/content/SocialTabContent/items";

import styles from "./styles.module.scss";

export const NavigationTab: React.FC = () => (
  <nav className={styles.navigation}>
    {navigation.map((link) => (
      <a href={link.href} className={styles.navigation__link}>
        {link.label}
      </a>
    ))}
  </nav>
);

export const SocialTab: React.FC = () => (
  <nav className={styles.nav}>
    {socialItems.map((item, index) => (
      <div key={index} className={styles.iconContainer}>
        {item.icons.map((icon, idx) => (
          <div key={idx}>{icon}</div>
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
          <div key={idx}>{icon}</div>
        ))}
      </div>
    ))}
  </nav>
);
