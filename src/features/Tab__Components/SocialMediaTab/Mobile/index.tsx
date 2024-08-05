import { getTabItemsMobile } from "@shared/lib/content/SocialTabContent/items";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

interface TabItem {
  size: number;
  icons: React.ReactNode[];
}

export const SocialMediaTabMobile = () => {
  const [socialItems, setSocialItems] = useState<TabItem[]>([]);

  useEffect(() => {
    const updateSocialItems = () => {
      const width = window.innerWidth;
      if (width <= 320) {
        setSocialItems(getTabItemsMobile(30));
      } else if (width <= 576) {
        setSocialItems(getTabItemsMobile(50));
      } else if (width <= 768) {
        setSocialItems(getTabItemsMobile(60));
      } else if (width <= 992) {
        setSocialItems(getTabItemsMobile(70));
      } else {
        setSocialItems(getTabItemsMobile(80));
      }
    };

    updateSocialItems();

    window.addEventListener("resize", updateSocialItems);

    return () => window.removeEventListener("resize", updateSocialItems);
  }, []);

  return (
    <div className={styles.container}>
      <Fade cascade className={styles.container__fade}>
        <div className={styles.container__items}>
          {socialItems.map((item, index) => (
            <div key={index} className={styles.container__row}>
              {item.icons.map((icon, idx) => (
                <div key={idx} className={styles.container__items__icon}>
                  {icon}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};
