import { tabItems } from '@shared/lib/content/MainTabContent/items'
import Pill from '@assets/pill.svg'

import styles from './styles.module.scss'

export const MainTab = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__box}>
                <img src={Pill} alt="" />
                <div className={styles.container__items}>
                    {tabItems.map((item) => (
                        <div className={styles.container__items__text}>
                            {item.label}
                        </div>
                    ))}
                </div>
                <img src={Pill} alt="" />
            </div>
        </div>
    )
}
