import React from "react";

import styles from "./styles.module.scss";

interface CardsI {
  img: string;
  description: string;
  title: string;
}

export const GrayCardMobile: React.FC<CardsI> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className={styles.grid__overlay}>
      <img src={img} alt={title} className={styles.grid__image} />
      <span className={styles.grid__title}>{title}</span>
      <p className={styles.grid__description}>{description}</p>
    </div>
  );
};
