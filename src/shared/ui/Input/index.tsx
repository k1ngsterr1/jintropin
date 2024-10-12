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
  const getResponsiveInputStyle = () => {
    const defaultStyle = {
      width: "100%",
      borderBottom: "2px solid white",
      background: "none",
      color: "#fff",
      fontFamily: "Raleway, sans-serif",
      fontSize: "clamp(9px, 4.20552vw, 36px)",
      padding: "10px 0",
    };

    // For tablet and landscape
    if (
      window.matchMedia("(min-width: 768px) and (orientation: landscape)")
        .matches
    ) {
      return {
        ...defaultStyle,
        width: "100%",
        fontSize: "clamp(7.5px, 15 / 1024 * 100vw, 30px)",
        paddingBottom: "5px", // Tailwind equivalent of pb-5
      };
    }

    // For XL screens
    if (window.matchMedia("(min-width: 1200px)").matches) {
      return {
        ...defaultStyle,
        height: "clamp(25px, 2.604vw, 100px)",
        fontSize: "clamp(8px, 0.83328vw, 32px)",
        padding: "4px", // Tailwind equivalent of p-4
      };
    }

    return defaultStyle; // Default to the basic styles
  };

  return (
    <Fade className={styles.animation}>
      <PhoneInput
        country={"kz"} // Set Kazakhstan flag by default
        placeholder={placeholder || "+7 (999) 999-99-99"}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
          ...rest,
        }}
        inputStyle={getResponsiveInputStyle()} // Ensures input takes full width
        buttonStyle={{
          background: "none",
          border: "none",
          marginRight: "10px",
        }} // Ensure the flag aligns properly
        enableAreaCodes={true}
        countryCodeEditable={false}
        specialLabel={""} // Hides the label next to the input
        containerStyle={{ width: "100%" }} // Ensures full width for the wrapper
      />
    </Fade>
  );
};

export default Input;
