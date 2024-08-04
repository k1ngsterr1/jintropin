import ItemsGrid from "@features/Tab__Components/AdventagesTab/ItemsGrid";

import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const Application = () => {
  return (
    <div className={styles.container}>
      <Fade className="w-full">
        <h2 className={styles.container__heading}>
          ОБЛАСТИ ПРИМЕНЕНИЯ{" "}
          <span className={styles.container__heading__span}>ДЖИНТРОПИНА</span>
        </h2>
      </Fade>
      <img src={DJIN} alt="djin" className={styles.container__img} />
      <ItemsGrid />
    </div>
  );
};
