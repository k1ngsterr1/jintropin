import React from 'react'
import { GrayCardGrid } from '@features/Tab__Components/AdventagesTab/GrayCardsGrid'

import styles from './styles.module.scss'

export const Advantages = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.container__heading}>ПРЕИМУЩЕСТВА <span className={styles.container__heading__span}>ДЖИНТРОПИНА</span></h4>
            <GrayCardGrid />
        </div>
    )
}
