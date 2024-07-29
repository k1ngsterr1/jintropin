import React from 'react'
import Selector from '@shared/ui/Selector'
import { options } from '@shared/lib/content/QuestionsContent'

import styles from './styles.module.scss'

import DJIN from '@assets/Advantages/ДЖИНТРОПИН.svg'

export const QuestionsTab = () => {
    return (
        <div className={styles.container}>
            <img src={DJIN} alt="djin" className={styles.container__img} />
            <span className={styles.container__heading}>ВОПРОСЫ/ОТВЕТЫ</span>

            {options.map(option => (
                <div className={styles.container__items} key={option.id}>
                    <Selector
                        placeholder={option.options[0].placeholder}
                        options={option.options}
                    />
                </div>
            ))}

        </div>
    )
}
