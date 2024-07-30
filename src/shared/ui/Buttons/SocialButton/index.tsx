import React from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.scss";

interface SocialButtonI extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconType;
}

export const SocialButton: React.FC<SocialButtonI> = ({
  icon: Icon,
  href,
  ...props
}) => {
  return (
    <a className={styles.button} href={href} {...props}>
      <Icon size={25} />
    </a>
  );
};

export const SocialButtonBigger: React.FC<SocialButtonI> = ({
  icon: Icon,
  href,
  ...props
}) => {
  return (
    <a className={styles.button} href={href} {...props}>
      <Icon size={40} />
    </a>
  );
};
