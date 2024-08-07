import React from "react";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  margin?: string;
  text: string;
  buttonType: "filled" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  margin,
  text,
  buttonType,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles["button--" + buttonType]} ${
    margin || ""
  }`;

  return (
    <button className={buttonClass} {...rest}>
      <Fade>{text}</Fade>
    </button>
  );
};

export default Button;
