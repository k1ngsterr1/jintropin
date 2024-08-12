import MainIll from "@assets/Main/MainPageIll.webp";
import MainMobIll from "@assets/Main/img_mob.webp";
import { SocialMediaTabMobile } from "@features/Tab__Components/SocialMediaTab/Mobile";
import LinkButton from "@shared/ui/Buttons/LinkButton";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const MainMobile = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className={styles.main} id="main-mob">
        <img
          src={MainMobIll}
          className={styles.main__mob}
          alt="Main Image Mobile"
        />
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
              <LinkButton
                to="#form-mob"
                text={t("main-pc.apply")}
                buttonType="outline"
                margin="mt-2"
              />
            </div>
          </Fade>
        </div>
        <SocialMediaTabMobile />
      </main>
    </>
  );
};
export default MainMobile;
