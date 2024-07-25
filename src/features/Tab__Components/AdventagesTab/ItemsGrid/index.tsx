import React from 'react';
import { items } from '@shared/lib/content/AdvantagesCardsContent';

import styles from './styles.module.scss'

const ItemsGrid: React.FC = () => {
    return (
        <div className={styles.grid}>
            {items.map(item => (
                <div key={item.id} className={styles.grid__items}>
                    <img src={item.image} alt={item.title} className={styles.grid__image} />
                    <div className={styles.grid__overlay}>
                        <div className={styles.grid__number}>{item.number}</div>
                        <div className={styles.grid__title}>{item.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemsGrid;
