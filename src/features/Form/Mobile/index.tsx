import React from "react";
import Paragraph from "@shared/ui/Paragraph/index";
import Input from "@shared/ui/Input/index";
import Button from "@shared/ui/Buttons/ReactButton/index";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const FormComponentMobile = () => {
  return (
    <div className={styles.container}>
      <p className={styles.container__paragraph}>
        <Fade>Отправьте заявку чтобы связаться с нами</Fade>
      </p>
      <Input placeholder="Ваше Имя" textAlign="center" margin="mt-10" />
      <Input placeholder="Номер Телефона" textAlign="center" margin="mt-10" />
      <Button text="Отправить" buttonType="outline" margin="mt-16" />
    </div>
  );
};
