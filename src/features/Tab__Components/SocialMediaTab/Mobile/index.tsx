import { adaptedMain } from "@shared/lib/content/SocialTabContent/items";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const SocialMediaTabMobile = () => {
  return (
    <div className={styles.container}>
      <Fade cascade className={styles.container__fade}>
        <div className={styles.container__items}>
          {adaptedMain.map((item, index) => (
            <div key={index} className={styles.container__row}>
              {item.icons.map((icon, idx) => (
                <div key={idx} className={styles.container__items__icon}>
                  {icon}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};
