import ItemsGrid from "@features/Tab__Components/AdventagesTab/ItemsGrid";

import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";

import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

export const Application = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Fade className="w-full">
        <h2 className={styles.container__heading}>
          {t("application-pc.heading1")}{" "}
          <span className={styles.container__heading__span}>
            {t("application-pc.heading2")}
          </span>
        </h2>
      </Fade>
      <img src={DJIN} alt="djin" className={styles.container__img} />
      <ItemsGrid />
    </div>
  );
};
