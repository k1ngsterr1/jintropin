import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

interface CardsI {
  image: string;
  number: string;
  title: string;
}

export const AdvantagesCards: React.FC<CardsI> = ({ image, number, title }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__items}>
        <img src={image} alt={title} className={styles.grid__image} />
        <Fade>
          <div className={styles.grid__overlay}>
            <div className={styles.grid__number}>{number}</div>
            <div className={styles.grid__title}>{title}</div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
