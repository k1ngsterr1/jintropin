import bannerData from "@shared/lib/content/InformationBanner";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";

export const InformationBanner = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = bannerData[currentLanguage] || bannerData.en;
  return (
    <div className={styles.container}>
      {content.map((item) => (
        <div key={item.id} className="">
          <Fade>
            <p className={styles.container__text}>{item.text}</p>
          </Fade>
        </div>
      ))}
    </div>
  );
};
