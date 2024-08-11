import LinkButton from "@shared/ui/Buttons/LinkButton";
import React from "react";

import styles from "./styles.module.scss";

interface ItemContentProps {
  img?: string;
  separator: string;
  textColor: string;
  text: string;
  to: string;
  buttonColor: string;
  lng: "en" | "ru";
}

export const VideoCard: React.FC<ItemContentProps> = ({
  img,
  separator,
  textColor,
  text,
  to,
  buttonColor,
  lng,
}) => (
  <div className={styles.container__content}>
    {img && <img className={styles.container__content__img} src={img} alt="" />}
    <div className={styles.container__content__text}>
      <hr style={{ border: `4px solid ${separator}`, height: "auto" }} />
      <p style={{ color: `${textColor}` }}>{text}</p>
    </div>
    <div className={styles.container__button}>
      <LinkButton
        to={to}
        target="_blank"
        text={`${lng === "ru" ? "Смотреть видео" : "Watch the video"}`}
        buttonType={buttonColor}
      />
    </div>
  </div>
);
