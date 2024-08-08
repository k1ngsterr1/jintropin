import { AdvantagesCards } from "@shared/ui/AdvantagesCards";
import styles from "./styles.module.scss";
import { items } from "@shared/lib/content/AdvantagesCardsContent";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";
const ApplicationMobile = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = items[currentLanguage] || items.en;
  return (
    <section className={styles.application}>
      <Fade className={styles.application__animation} delay={0.3}>
        <h2 className={styles.application__heading}>
          ОБЛАСТИ ПРИМЕНЕНИЯ{" "}
          <span className={styles.application__heading__span}>ДЖИНТРОПИНА</span>
        </h2>
      </Fade>
      <div className={styles.application__container}>
        {content.map((item, index) => (
          <AdvantagesCards
            key={index}
            image={item.image}
            number={item.number}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};
export default ApplicationMobile;
