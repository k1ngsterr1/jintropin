import Paragraph from '@shared/ui/Paragraph'
import Button from "@shared/ui/Buttons/ReactButton";
import { SocialMediaTab } from '@features/Tab__Components/SocialMediaTab';

import MainIll from '@assets/Main/MainPageIll.webp'

import styles from './styles.module.scss'


export const Main = () => {
    return (
        <>
            <main className={styles.container}>
                <SocialMediaTab />
                <div className={styles.container__main}>
                    <img src={MainIll} alt="" className={styles.container__img} />
                    <h1 className={styles.container__heading}><span className={styles.container__heading__span}>ДЖИНТРОПИН 10 МЕ - ЛУЧШИЙ </span> ГОРМОН РОСТА</h1>
                    <Paragraph
                        paragraphType='white'
                        text="Джинтропин успешно применяют спортсмены по всему миру. При помощи гормона роста Вы сможете нарастить мышечную массу без эффекта отката, сжечь жир, увеличить силу и выносливость, укрепить кости, связки и иммунитет."
                        width='35%'
                        margin='mt-4'
                        lineHeight='clamp(13.5px,1.40616vw,54px)'
                    />
                    <div className={styles.container__items}>
                        <Button text="Оставить заявку" buttonType='outline' margin='mt-4' />
                    </div>
                </div>
            </main>
        </>
    )
}
