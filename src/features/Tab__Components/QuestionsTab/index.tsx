import { options } from "@shared/lib/content/QuestionsContent";
import Selector from "@shared/ui/Selector";

import styles from "./styles.module.scss";

import DJIN from "@assets/Advantages/ДЖИНТРОПИН.svg";
import { Fade } from "react-awesome-reveal";

export const QuestionsTab = () => {
  return (
    <div className={styles.container}>
      <img src={DJIN} alt="djin" className={styles.container__img} />
      <span className={styles.container__heading}>ВОПРОСЫ/ОТВЕТЫ</span>
      {options.map((option) => (
        <Fade className="w-full">
          <div className={styles.container__items} key={option.id}>
            <Selector
              placeholder={option.options[0].placeholder}
              options={option.options}
            />
          </div>
        </Fade>
      ))}
    </div>
  );
};
