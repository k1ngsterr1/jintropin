import React from "react";
import Paragraph from "@shared/ui/Paragraph/index";
import Input from "@shared/ui/Input/index";
import Button from "@shared/ui/Buttons/ReactButton/index";

import styles from "./styles.module.scss";

export const FormComponent = () => {
  return (
    <div className={styles.container}>
      <Paragraph
        text="Отправьте заявку чтобы связаться с нами"
        paragraphType="white"
        margin="mt-4"
      />
      <Input placeholder="Ваше Имя" textAlign="center" margin="mt-10" />
      <Input placeholder="Номер Телефона" textAlign="center" margin="mt-10" />
      <Button text="Отправить" buttonType="outline" margin="mt-10" />
    </div>
  );
};
