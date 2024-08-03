import ItemsGrid from "@features/Tab__Components/AdventagesTab/ItemsGrid";

import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";

import styles from "./styles.module.scss";

export const Application = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__heading}>
        ОБЛАСТИ ПРИМЕНЕНИЯ{" "}
        <span className={styles.container__heading__span}>ДЖИНТРОПИНА</span>
      </h2>
      <img src={DJIN} alt="djin" className={styles.container__img} />
      <ItemsGrid />
    </div>
  );
};
