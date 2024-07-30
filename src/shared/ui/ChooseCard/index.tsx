import React from "react";
import styles from "./styles.module.scss";

interface PhotoContentProps {
  photo: string;
}

export const ChooseCard: React.FC<PhotoContentProps> = ({ photo }) => (
  <div className={styles.container__content}>
    <img className={styles.container__content__img} src={photo} alt="" />
  </div>
);
