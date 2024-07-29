import React from 'react'
import { ChooseTab } from '@features/Tab__Components/ChooseTab'

import styles from './styles.module.scss'

export const Choose = () => {
    return (
        <div className={styles.container}>
            <span className={styles.container__heading}>ЧЕМПИОНЫ ВЫБИРАЮТ <span className={styles.container__heading__span}>ДЖИНТРОПИН</span></span>
            <ChooseTab />
        </div>
    )
}
