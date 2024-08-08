import { GrayCardGrid } from "@features/Tab__Components/AdventagesTab/GrayCardsGrid";
import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const Advantages = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Fade delay={0.2}>
        <h4 className={styles.container__heading}>
          {t("advantages-pc.heading1")}{" "}
          <span className={styles.container__heading__span}>
            {t("advantages-pc.heading2")}
          </span>
        </h4>
      </Fade>
      <GrayCardGrid />
    </div>
  );
};
