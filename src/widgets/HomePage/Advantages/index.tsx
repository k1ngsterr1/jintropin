import { GrayCardGrid } from "@features/Tab__Components/AdventagesTab/GrayCardsGrid";
import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";

export const Advantages = () => {
  return (
    <div className={styles.container}>
      <Fade delay={0.2}>
        <h4 className={styles.container__heading}>
          ПРЕИМУЩЕСТВА{" "}
          <span className={styles.container__heading__span}>ДЖИНТРОПИНА</span>
        </h4>
      </Fade>
      <GrayCardGrid />
    </div>
  );
};
