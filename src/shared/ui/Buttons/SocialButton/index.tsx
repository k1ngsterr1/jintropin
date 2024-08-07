import React from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.scss";

interface SocialButtonI extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconType;
}
interface ISocialButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconType;
  size: number;
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
export const SocialButtonWithSize: React.FC<ISocialButton> = ({
  icon: Icon,
  size,
  href,
  ...props
}) => {
  return (
    <a className={styles.button} href={href} {...props}>
      <Icon size={size} />
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
