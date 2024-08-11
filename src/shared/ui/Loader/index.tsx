import { RefContext } from "@shared/lib/contexts/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ClipLoader } from "react-spinners";

import styles from "./styles.module.scss";

export const Loader = () => {
  const { loaderRef } = useContext(RefContext);
  const { t } = useTranslation();

  return (
    <div className={styles.loader} ref={loaderRef}>
      <span className={styles.loader__logo}>{t("header-pc.logo")}</span>
      <ClipLoader color="#FFF200" size={64} />
    </div>
  );
};
