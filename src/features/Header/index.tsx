import { navLinks } from "@shared/lib/content/links";
import Button from "@shared/ui/Buttons/ReactButton";
import { PCBurgerButton } from "@shared/ui/Buttons/PCBurgerButton";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import Switcher from "@features/SwitchLanguage";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <header className={styles.header_pc}>
        <div className={styles.header_pc__items}>
          <Fade>
            <a href="/home" className={styles.header_pc__logo}>
              {t("header.logo")}
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
                <Button text="Написать в Whatsapp" buttonType="outline" />
              </>
            </Fade>
            <Fade delay={0.21}>
              <>
                <Button text="Получить консультацию" buttonType="outline" />
              </>
            </Fade>
            <Fade delay={0.23}>
              <PCBurgerButton />
            </Fade>
          </nav>
        </div>
      </header>
    </>
  );
};
