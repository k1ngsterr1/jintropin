import React from "react";

import styles from "./styles.module.scss";

interface CardsI {
  img: string;
  description: string;
  title: string;
}

export const GrayCard: React.FC<CardsI> = ({ img, title, description }) => {
  return (
    <div className={styles.grid__overlay}>
      <img src={img} alt={title} className={styles.grid__image} />
      <div className={styles.grid__title}>{title}</div>
      <div className={styles.grid__description}>{description}</div>
    </div>
  );
};
