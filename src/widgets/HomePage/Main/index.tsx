import Paragraph from "@shared/ui/Paragraph";
import Button from "@shared/ui/Buttons/ReactButton";
import MainIll from "@assets/Main/MainPageIll.webp";
import { SocialMediaTab } from "@features/Tab__Components/SocialMediaTab";
import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";

export const Main = () => {
  return (
    <>
      <main className={styles.container}>
        <SocialMediaTab />
        <div className={styles.container__main}>
          <img src={MainIll} alt="" className={styles.container__img} />
          <Fade>
            <h1 className={styles.container__heading}>
              <span className={styles.container__heading__span}>
                ДЖИНТРОПИН 10 МЕ - ЛУЧШИЙ{" "}
              </span>{" "}
              <span className="text-primary">ГОРМОН РОСТА</span>
            </h1>
          </Fade>
          <Fade delay={0.2}>
            <Paragraph
              paragraphType="white"
              text="Джинтропин успешно применяют спортсмены по всему миру. При помощи гормона роста Вы сможете нарастить мышечную массу без эффекта отката, сжечь жир, увеличить силу и выносливость, укрепить кости, связки и иммунитет."
              width="35%"
              margin="mt-4"
              lineHeight="clamp(13.5px,1.40616vw,54px)"
            />
          </Fade>
          <Fade delay={0.3}>
            <div className={styles.container__items}>
              <Button
                text="Оставить заявку"
                buttonType="outline"
                margin="mt-4"
              />
            </div>
          </Fade>
        </div>
      </main>
    </>
  );
};
