import React from "react";
import styles from "./styles.module.scss";

interface ButtonLinkProps {
  margin?: string;
  text: string;
  to: string[];
  buttonType: "filled" | "outline";
}

const LinkButton: React.FC<ButtonLinkProps> = ({
  margin,
  text,
  to,
  buttonType,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles["button--" + buttonType]} ${
    margin || ""
  }`;

  const handleDownload = () => {
    to.forEach((url) => {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", ""); // Trigger download
      document.body.appendChild(link);
      link.click();
      link.remove(); // Clean up the DOM
    });
  };

  return (
    <button
      className={buttonClass}
      onClick={handleDownload} // Attach the download handler
      {...rest}
    >
      {text}
    </button>
  );
};

export default LinkButton;
