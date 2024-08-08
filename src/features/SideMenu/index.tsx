import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { RefContext } from "@shared/lib/contexts/context";
import { useSideMenuAnimation } from "@shared/lib/animations/useSideMenuAnimation";
import { useAppDispatch } from "@redux/hooks";
import { closeMenu } from "@redux/slices/sideMenuSlice";
import sideMenuContent from "@shared/lib/content/SideMenuContent";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Language } from "i18n";

export const SideMenu = () => {
  const { sideMenuRef } = useContext(RefContext);
  const { sideMenuAnimation } = useSideMenuAnimation();
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  sideMenuAnimation();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };
  const currentLanguage = i18n.language as Language;

  const content = sideMenuContent[currentLanguage] || sideMenuContent.en;
  return (
    <aside className={styles.side_menu} ref={sideMenuRef}>
      <FontAwesomeIcon
        icon={faClose}
        className={styles.side_menu__close}
        onClick={handleCloseMenu}
      />
      <div className={styles.side_menu__content}>
        {content.map((link, index) => (
          <Link
            className={styles.side_menu__content__link}
            to={link.href}
            key={index}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};
