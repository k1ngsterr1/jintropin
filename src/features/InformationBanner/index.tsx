import bannerData from "@shared/lib/content/InformationBanner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Language } from "i18n";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const InformationBanner = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = bannerData[currentLanguage] || bannerData.en;

  return (
    <div className={styles.container}>
      {content.map((item, index) => (
        <div key={index}>
          <Fade>
            <p className={styles.container__text}>{item.text}</p>
          </Fade>
        </div>
      ))}
    </div>
  );
};
