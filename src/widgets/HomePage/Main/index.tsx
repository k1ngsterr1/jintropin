import Paragraph from '@shared/ui/Paragraph'
import Button from "@shared/ui/Buttons/ReactButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaTab } from '@features/Tab__Components/SocialMediaTab';

import MainIll from '@assets/Main/MainPageIll.webp'

import styles from './styles.module.scss'


export const Main = () => {
    return (
        <>
            <main className={styles.container}>
                <SocialMediaTab />
                <img src={MainIll} alt="" className={styles.container__img} />
                <h1 className={styles.container__heading}><span className={styles.container__heading__span}>Джинтропин 10 ME -  </span> Лучший Гормон Роста</h1>
                <Paragraph
                    paragraphType='white'
                    text="Джинтропин 10 МЕ успешно применяют спортсмены во всем Мире. Гормон ускоряет рост мышц, увеличивает силу, выносливость, укрепляет иммунитет."
                    width='30%'
                    margin='mt-10'
                    lineHeight='clamp(13.5px,1.40616vw,54px)'
                />
                <div className={styles.container__items}>
                    <Button text="Оставить заявку" buttonType='outline' margin='mt-8' />
                    <a href="/siski" className={styles.container__items__video}>
                        <FontAwesomeIcon icon={faPlayCircle} size='2xl' className="text-primary" />
                        Посмотрите наше видео
                    </a>
                </div>
            </main>
        </>
    )
}
