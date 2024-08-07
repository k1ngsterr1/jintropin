import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Buttons/ReactButton";
const VerificationMobile = () => {
  return (
    <div className={styles.verification}>
      <div className={styles.verification__container}>
        <h2 className={styles.verification__heading}>КАК ПРОЙТИ ПРОВЕРКУ?</h2>
        <p className={styles.verification__paragraph}>
          Убедиться в подлинности нашего препарата легко:
        </p>
        <ul className={styles.verification__instructions}>
          <li className={styles.verification__instructions__point}>
            -Удалите фольгированную полоску с защитного стикера с уникальным
            номером и фиброволокнами;
          </li>
          <li className={styles.verification__instructions__point}>
            -Введите 12-значный код, расположенный под полоской, в специальное
            окно на официальном сайте.
          </li>
        </ul>
        <Button text="Проверить" buttonType="outline" margin="mt-4" />
      </div>
    </div>
  );
};
export default VerificationMobile;
