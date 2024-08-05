import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import MainIll from "@assets/Main/MainPageIll.webp";
import Button from "@shared/ui/Buttons/ReactButton";
import { SocialMediaTabMobile } from "@features/Tab__Components/SocialMediaTab/Mobile";
const MainMobile = () => {
  return (
    <div className={styles.main}>
      <img src={MainIll} alt="" className={styles.main__img} />
      <div className={styles.main__container}>
        <Fade className={styles.main__container__item}>
          <h1 className={styles.main__container__heading}>
            <span className={styles.main__container__heading__span}>
              ДЖИНТРОПИН 10 МЕ - ЛУЧШИЙ{" "}
            </span>{" "}
            <span className="text-primary">ГОРМОН РОСТА</span>
          </h1>
        </Fade>
        <Fade delay={0.2} className={styles.main__container__item}>
          <p className={styles.main__container__paragraph}>
            Джинтропин успешно применяют спортсмены по всему миру. При помощи
            гормона роста Вы сможете нарастить мышечную массу без эффекта
            отката, сжечь жир, увеличить силу и выносливость, укрепить кости,
            связки и иммунитет.
          </p>
        </Fade>
        <Fade delay={0.3} className={styles.main__container__item}>
          <div className={styles.main__container__btn}>
            <Button text="Оставить заявку" buttonType="outline" margin="mt-2" />
          </div>
        </Fade>
      </div>
      <SocialMediaTabMobile />
    </div>
  );
};
export default MainMobile;
