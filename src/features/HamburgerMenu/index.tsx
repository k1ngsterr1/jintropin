import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { links } from "@shared/lib/content/Header/Menu";
import { Fade } from "react-awesome-reveal";
import Switcher from "@features/SwitchLanguage";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";

interface Props {
  isActive: boolean;
  handleClick: () => void;
}

export const HamburgerMenu: React.FC<Props> = ({ isActive, handleClick }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const content = links[currentLanguage] || links.en;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className={styles.menu}>
      <button className={styles.menu__burger} onClick={handleClick}>
        <span
          className={`${styles.menu__burger__line} ${
            isActive
              ? styles.menu__active__burger__line1
              : styles.menu__burger__line1
          }`}
        ></span>
        <span
          className={`${styles.menu__burger__line} ${
            isActive
              ? styles.menu__active__burger__line2
              : styles.menu__burger__line2
          }`}
        ></span>
        <span
          className={`${styles.menu__burger__line} ${
            isActive
              ? styles.menu__active__burger__line3
              : styles.menu__burger__line3
          }`}
        ></span>
      </button>
      <nav
        className={`${isActive ? styles.menu__active__nav : styles.menu__nav}`}
      >
        <ul
          className={`${
            isActive ? styles.menu__active__nav__list : styles.menu__nav__list
          }`}
        >
          {content.map((item, index) => (
            <li
              key={index}
              className={`${
                isActive
                  ? styles.menu__active__nav__list__item
                  : styles.menu__nav__list__item
              }`}
            >
              <Link
                to={item.href}
                className={`${
                  isActive
                    ? styles.menu__active__nav__list__link
                    : styles.menu__nav__list__link
                }`}
              >
                <Fade>{item.text}</Fade>
              </Link>
            </li>
          ))}
          <li
            key={8}
            className={`${
              isActive
                ? styles.menu__active__nav__list__item
                : styles.menu__nav__list__item
            }`}
          >
            <Fade>
              <Switcher changeLanguage={changeLanguage} />
            </Fade>
          </li>
        </ul>
      </nav>
    </div>
  );
};
