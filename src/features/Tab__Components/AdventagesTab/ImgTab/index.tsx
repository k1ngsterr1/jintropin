import React from 'react';
import { AdvantagesCards } from '@shared/ui/AdvantagesCards';
import { cardsData } from '@shared/lib/content/AdvantagesCardsContent';
import styles from './styles.module.scss';

const ImgTab: React.FC = () => {
    return (
        <div className={styles.advantages}>
            {cardsData.map((card, index) => (
                <AdvantagesCards key={index} text={card.text} imgSrc={card.imgSrc} buttonClass={card.buttonClass} textClass={card.textClass} />
            ))}
        </div>
    );
};

export default ImgTab;
