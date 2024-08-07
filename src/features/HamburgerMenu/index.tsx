import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { links } from "@shared/lib/content/Header/Menu";
import { Fade } from "react-awesome-reveal";

interface Props {
  isActive: boolean;
  handleClick: () => void;
}

export const HamburgerMenu: React.FC<Props> = ({ isActive, handleClick }) => {
  console.log(isActive);
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
          {links.map((item, index) => (
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
        </ul>
      </nav>
    </div>
  );
};
