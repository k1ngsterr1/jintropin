import { Language, tabItems } from "@shared/lib/content/SocialTabContent/items";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const SocialMediaTab = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const items = tabItems[currentLanguage] || tabItems.en;
  return (
    <div className={styles.container}>
      <Fade cascade>
        <p className={styles.container__text}>{t("main-pc.media")}</p>
        <div className={styles.container__items}>
          {items.map((item, index) => (
            <div key={index}>
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
