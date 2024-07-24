import { tabItems } from '@shared/lib/content/SocialTabContent/items'

import styles from './styles.module.scss'

export const SocialMediaTab = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__box}>
                <div className={styles.container__items}>
                    {tabItems.map((item) => (
                        <div className={styles.container__items__text}>
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
