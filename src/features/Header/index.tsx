import { navLinks } from "@shared/lib/content/links";
import { PCBurgerButton } from "@shared/ui/Buttons/PCBurgerButton";
import Switcher from "@features/SwitchLanguage";
import LinkButton from "@shared/ui/Buttons/LinkButton";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import { Loader } from "@shared/ui/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const changeLanguage = async (lng: string) => {
    setIsLoading(true);
    await i18n.changeLanguage(lng).then(() => setIsLoading(false));
  };

  useEffect(() => {
    const headerElement = headerRef.current;

    if (headerElement) {
      // ScrollTrigger to track when to toggle the scrolled class
      ScrollTrigger.create({
        start: "top top", // Header reaches the top of the viewport
        end: "bottom bottom", // Until the bottom of the page
        onEnter: () => headerElement.classList.add(styles.scrolled),
        onLeaveBack: () => headerElement.classList.remove(styles.scrolled),
        markers: false, // For debugging
        scrub: false,
      });

      // Make sure ScrollTrigger recalculates properly
      ScrollTrigger.refresh();
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <header ref={headerRef} className={styles.header_pc} id="header">
          <div className={styles.header_pc__items}>
            <Fade>
              <a href="/home" className={styles.header_pc__logo}>
                {t("header-pc.logo")}
              </a>
            </Fade>
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Fade key={link.href} delay={0.15}>
                  <a href={link.href} className={styles.header_pc__link}>
                    {link.label}
                  </a>
                </Fade>
              ))}
              <Fade delay={0.17}>
                <Switcher changeLanguage={changeLanguage} />
              </Fade>
              <Fade delay={0.21}>
                <LinkButton
                  to="#form"
                  text={`${t("header-pc.consultation_btn")}`}
                  buttonType="outline"
                />
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
