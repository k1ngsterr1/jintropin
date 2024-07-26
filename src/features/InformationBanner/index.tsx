import React from 'react'
import bannerData from '@shared/lib/content/InformationBanner'

import styles from './styles.module.scss'

export const InformationBanner = () => {
    return (
        <div className={styles.container}>
            {bannerData.map(item => (
                <div key={item.id} className="">
                    <p className={styles.container__text}>{item.text}</p>
                </div>
            ))}
        </div>
    )
}
