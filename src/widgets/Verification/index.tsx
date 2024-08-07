import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Buttons/ReactButton";
const Verification = () => {
  return (
    <div className={styles.verification}>
      <div className={styles.verification__container}>
        <h2 className={styles.verification__heading}>
          <Fade>КАК ПРОЙТИ ПРОВЕРКУ?</Fade>
        </h2>
        <p className={styles.verification__paragraph}>
          <Fade>Убедиться в подлинности нашего препарата легко:</Fade>
        </p>
        <ul className={styles.verification__instructions}>
          <li className={styles.verification__instructions__point}>
            <Fade>
              -Удалите фольгированную полоску с защитного стикера с уникальным
              номером и фиброволокнами;
            </Fade>
          </li>
          <li className={styles.verification__instructions__point}>
            <Fade>
              -Введите 12-значный код, расположенный под полоской, в специальное
              окно на официальном сайте.
            </Fade>
          </li>
        </ul>
        <Button text="Проверить" buttonType="outline" margin="mt-4" />
      </div>
    </div>
  );
};
export default Verification;
