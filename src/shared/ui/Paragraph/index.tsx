import React from "react";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

interface Props {
  text: string;
  margin?: string;
  align?: string;
  width?: string;
  lineHeight?: string;
  paragraphType: "white" | "dark" | "yellow";
}

const Paragraph: React.FC<Props> = ({
  text,
  margin,
  width,
  align,
  lineHeight,
  paragraphType,
}) => {
  const paragraphClass = `${styles.paragraph} ${
    styles[`paragraph--${paragraphType}`]
  } ${margin || ""} ${align || ""}`;

  return (
    <p className={paragraphClass} style={{ width, lineHeight }}>
      <Fade>{text}</Fade>
    </p>
  );
};

export default Paragraph;
