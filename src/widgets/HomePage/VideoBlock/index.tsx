import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import reelsData from '@shared/lib/content/ReelsCardsContent';
import LinkButton from '@shared/ui/Buttons/LinkButton';
import { useCustomButton } from '@shared/lib/hooks/useCustomButton';

import left from '@assets/Choose/ArrowLeft.svg'
import right from '@assets/Choose/ArrowRight.svg'

import DJIN from '@assets/Advantages/ДЖИНТРОПИН.svg'

import styles from './styles.module.scss'
import '@splidejs/react-splide/css';

export const VideoBlock = () => {
    const { splideRef, goPrev, goNext } = useCustomButton();
    return (
        <div className={styles.container}>
            <img src={DJIN} alt="djin" className={styles.container__img} />
            <div className={styles.container__items}>
                <img onClick={goPrev} className={`${styles.customButton} ${styles.prev}`} src={left} alt="" />
                <img onClick={goNext} className={`${styles.customButton} ${styles.next}`} src={right} alt="" />
                <Splide ref={splideRef} aria-label="My Favorite Images" options={{
                    width: 1500,
                    focus: 'center',
                    perPage: 3,
                    perMove: 1,
                    pagination: false,
                    arrows: false
                }}>
                    {reelsData.map(item => (
                        <SplideSlide key={item.id}>
                            <div className={styles.container__content}>
                                {item.img && <img className={styles.container__content__img} src={item.img} alt="" />}
                                <div className={styles.container__content__text}>
                                    <hr style={{ border: `4px solid ${item.separator}`, height: 'auto' }} />
                                    <p style={{ color: `${item.textColor}` }}>{item.text}</p>
                                </div>
                                <div className={styles.container__button}>
                                    <LinkButton to={item.to} text='Смотреть видео' buttonType={item.buttonColor} />
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}
