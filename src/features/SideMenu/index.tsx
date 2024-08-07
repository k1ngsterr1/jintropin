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

export const SideMenu = () => {
  const { sideMenuRef } = useContext(RefContext);
  const { sideMenuAnimation } = useSideMenuAnimation();
  const dispatch = useAppDispatch();
  sideMenuAnimation();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  return (
    <aside className={styles.side_menu} ref={sideMenuRef}>
      <FontAwesomeIcon
        icon={faClose}
        className={styles.side_menu__close}
        onClick={handleCloseMenu}
      />
      <div className={styles.side_menu__content}>
        {sideMenuContent.map((link, index) => (
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
