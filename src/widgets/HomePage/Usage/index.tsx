import { UsageTab } from '@features/Tab__Components/UsageTab'

import styles from './styles.module.scss'

export const Usage = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.container__heading}>ЧТО ТАКОЕ <span className={styles.container__heading__span}>ДЖИНТРОПИН?</span></h3>
            <div className={styles.container__bg}>
                <UsageTab />
            </div>
        </div>
    )
}
