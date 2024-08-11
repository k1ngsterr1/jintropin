import React from "react";
import styles from "./styles.module.scss";

interface ButtonLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  margin?: string;
  text: string;
  to: string;
  buttonType: "filled" | "outline";
  target?: string;
}

const LinkButton: React.FC<ButtonLinkProps> = ({
  margin,
  text,
  to,
  buttonType,
  target,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles["button--" + buttonType]} ${
    margin || ""
  }`;

  return (
    <a
      href={to}
      className={buttonClass}
      {...rest}
      rel="noopener noreferrer"
      target={target}
    >
      {text}
    </a>
  );
};

export default LinkButton;
