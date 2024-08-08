import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";
import { GrayCardGridMobile } from "@features/Tab__Components/AdventagesTab/GrayCardsGrid/Mobile";
import { useTranslation } from "react-i18next";

const AdvantagesMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.advantages}>
      <Fade delay={0.2} className={styles.advantages__animation}>
        <h4 className={styles.advantages__heading}>
          {t("advantages-pc.heading1")}{" "}
          <span className={styles.advantages__heading__span}>
            {t("advantages-pc.heading2")}
          </span>
        </h4>
      </Fade>
      <GrayCardGridMobile />
    </div>
  );
};
export default AdvantagesMobile;
