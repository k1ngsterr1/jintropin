import { toggleMenu } from "@redux/slices/sideMenuSlice";
import { useAppDispatch } from "@redux/hooks";
import styles from "./styles.module.scss";

export const PCBurgerButton = () => {
  const dispatch = useAppDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={styles.pc_burger} onClick={handleToggleMenu}>
      <span className={styles.pc_burger__line} />
      <span className={styles.pc_burger__line} />
      <span className={styles.pc_burger__line} />
    </div>
  );
};
