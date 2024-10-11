import React from "react";
import { Fade } from "react-awesome-reveal";
import PhoneInput from "react-phone-input-2";
import styles from "./styles.module.scss";

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
export const TelInput: React.FC<InputProps> = ({
  margin,
  placeholder,
  textAlign,
  ...rest
}) => {
  const inputClass = `${styles.tel_input} ${margin || ""}`;
  const inputStyle = textAlign ? { textAlign } : {};

  return (
    <div className={inputClass} style={inputStyle}>
      <PhoneInput
        country={"kz"} // Set Kazakhstan flag by default
        placeholder={placeholder}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
          ...rest,
        }}
        inputStyle={{
          width: "100%",
          borderBottom: "2px solid white",
          background: "none",
          color: "#fff",
          fontFamily: "Raleway, sans-serif",
          fontSize: "clamp(9px, 4.20552vw, 36px)",
        }}
        buttonStyle={{ background: "none" }}
      />
    </div>
  );
};

export default Input;
