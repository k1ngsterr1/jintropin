import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import MainIll from "@assets/Main/MainPageIll.webp";
import Button from "@shared/ui/Buttons/ReactButton";
import { SocialMediaTabMobile } from "@features/Tab__Components/SocialMediaTab/Mobile";
import { useTranslation } from "react-i18next";
const MainMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <img src={MainIll} alt="" className={styles.main__img} />
      <div className={styles.main__container}>
        <Fade className={styles.main__container__item}>
          <h1 className={styles.main__container__heading}>
            <span className={styles.main__container__heading__span}>
              {t("main-pc.heading1")}{" "}
            </span>{" "}
            <span className="text-primary">{t("main-pc.heading2")}</span>
          </h1>
        </Fade>
        <Fade delay={0.2} className={styles.main__container__item}>
          <p className={styles.main__container__paragraph}>
            {t("main-pc.paragraph")}
          </p>
        </Fade>
        <Fade delay={0.3} className={styles.main__container__item}>
          <div className={styles.main__container__btn}>
            <Button
              text={t("main-pc.apply")}
              buttonType="outline"
              margin="mt-2"
            />
          </div>
        </Fade>
      </div>
      <SocialMediaTabMobile />
    </div>
  );
};
export default MainMobile;
