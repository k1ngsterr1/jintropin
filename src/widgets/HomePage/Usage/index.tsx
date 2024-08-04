import { UsageTab } from "@features/Tab__Components/UsageTab";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const Usage = () => {
  return (
    <div className={styles.container}>
      <Fade delay={0.2}>
        <h3 className={styles.container__heading}>
          ЧТО ТАКОЕ{" "}
          <span className={styles.container__heading__span}>ДЖИНТРОПИН?</span>
        </h3>
      </Fade>
      <div className={styles.container__bg}>
        <UsageTab />
      </div>
    </div>
  );
};
