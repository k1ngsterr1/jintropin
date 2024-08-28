import { navLinks } from "@shared/lib/content/links";
import { PCBurgerButton } from "@shared/ui/Buttons/PCBurgerButton";

import Switcher from "@features/SwitchLanguage";
import LinkButton from "@shared/ui/Buttons/LinkButton";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Loader } from "@shared/ui/Loader";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = async (lng: string) => {
    setIsLoading(true);
    await i18n.changeLanguage(lng).then(() => setIsLoading(false));
  };
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <header className={styles.header_pc} id="header">
          <div className={styles.header_pc__items}>
            <Fade>
              <a href="/home" className={styles.header_pc__logo}>
                {t("header-pc.logo")}
              </a>
            </Fade>
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Fade delay={0.15}>
                  <a href={link.href} className={styles.header_pc__link}>
                    {link.label}
                  </a>
                </Fade>
              ))}
              <Fade delay={0.17}>
                <Switcher changeLanguage={changeLanguage} />
              </Fade>
              <Fade delay={0.19}>
                <>
                  <LinkButton
                    to="https://whatsapp.com"
                    target="_blank"
                    text={`${t("header-pc.whatsapp_btn")}`}
                    buttonType="outline"
                  />
                </>
              </Fade>
              <Fade delay={0.21}>
                <>
                  <LinkButton
                    to="#form"
                    text={`${t("header-pc.consultation_btn")}`}
                    buttonType="outline"
                  />
                </>
              </Fade>
              <Fade delay={0.23}>
                <PCBurgerButton />
              </Fade>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};
