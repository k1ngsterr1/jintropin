import React from "react";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
  placeholder: string;
  type?: string;
  textAlign?: "left" | "center" | "right";
}

const Input: React.FC<InputProps> = ({
  margin,
  placeholder,
  type = "text",
  textAlign,
  ...rest
}) => {
  const inputClass = `${styles.input} ${margin || ""}`;
  const inputStyle = textAlign ? { textAlign } : {};

  return (
    <Fade className={styles.animation}>
      <input
        className={inputClass}
        style={inputStyle}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </Fade>
  );
};

export default Input;
