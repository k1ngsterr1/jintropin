import React from 'react'
import LinkButton from '@shared/ui/Buttons/LinkButton'

import styles from './styles.module.scss'

export const Questions = () => {
    const handleRedirect = () => {
        window.location.href = '/questions';
    };
    return (
        <div className={styles.container}>
            <span className={styles.container__heading}>ВОПРОСЫ</span>
            <LinkButton margin='mt-10' onClick={handleRedirect} text='QA' buttonType='filled' />
        </div>
    )
}
