import React from 'react'
import { cardsData } from '@shared/lib/content/ContraindicationsContent';

import styles from './styles.module.scss'

export const ContraindicationsTab = () => {
    return (
        <div className={styles.grid}>
            {cardsData.map(item => (
                <div key={item.id} className={styles.grid__items}>
                    <div className={styles.grid__overlay}>
                        <img src={item.img} alt={item.title} className={styles.grid__image} />
                        <div className={styles.grid__title}>{item.title}</div>
                    </div>
                    <div className={styles.grid__description}>{item.description}</div>
                </div>
            ))}
        </div>
    )
}
