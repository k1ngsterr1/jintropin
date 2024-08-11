import { RefContext } from "@shared/lib/contexts/context";
import { useContext } from "react";
import { ClipLoader } from "react-spinners";

import styles from "./styles.module.scss";

export const Loader = () => {
  const { loaderRef } = useContext(RefContext);

  return (
    <div className={styles.loader} ref={loaderRef}>
      <span className={styles.loader__logo}>Jintropin</span>
      <ClipLoader color="#FFF200" size={64} />
    </div>
  );
};
