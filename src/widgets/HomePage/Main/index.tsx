import MainIll from "@assets/Main/MainPageIll.webp";
import { SocialMediaTab } from "@features/Tab__Components/SocialMediaTab";
import LinkButton from "@shared/ui/Buttons/LinkButton";
import Paragraph from "@shared/ui/Paragraph";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <img src={MainIll} alt="Illustration" className={styles.container__img} />
      <main className={styles.container} id="main">
        <SocialMediaTab />
        <div className={styles.container__main}>
          <Fade>
            <h1 className={styles.container__heading}>
              <span className={styles.container__heading__span}>
                {t("main-pc.heading1")}{" "}
              </span>{" "}
              <span className="text-primary">{t("main-pc.heading2")}</span>
            </h1>
          </Fade>
          <Fade delay={0.2}>
            <Paragraph
              paragraphType="white"
              text={t("main-pc.paragraph")}
              width="35%"
              margin="mt-4"
              lineHeight="clamp(13.5px,1.40616vw,54px)"
            />
          </Fade>
          <Fade delay={0.3}>
            <div className={styles.container__items}>
              <LinkButton
                to="#form"
                text={t("main-pc.apply")}
                buttonType="outline"
                margin="mt-4"
              />
            </div>
          </Fade>
        </div>
      </main>
    </>
  );
};
