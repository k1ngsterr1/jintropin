import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";
import { GrayCardGridMobile } from "@features/Tab__Components/AdventagesTab/GrayCardsGrid/Mobile";

const AdvantagesMobile = () => {
  return (
    <div className={styles.advantages}>
      <Fade delay={0.2} className={styles.advantages__animation}>
        <h4 className={styles.advantages__heading}>
          ПРЕИМУЩЕСТВА{" "}
          <span className={styles.advantages__heading__span}>ДЖИНТРОПИНА</span>
        </h4>
      </Fade>
      <GrayCardGridMobile />
    </div>
  );
};
export default AdvantagesMobile;
