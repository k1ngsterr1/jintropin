import React from 'react';
import styles from './styles.module.scss';

interface CardsI {
    imgSrc: string;
    buttonClass: string;
    text: string;
    textClass: string;
}

export const AdvantagesCards: React.FC<CardsI> = ({
    buttonClass,
    imgSrc,
    text,
    textClass,
    ...rest
}) => {
    return (
        <div className={buttonClass}
            {...rest}>
            <img src={imgSrc} alt="Advantage" className={styles.card__img} />
            <div className={textClass}>
                <button className={styles.btn}>{text}</button>
            </div>
        </div>
    );
};
