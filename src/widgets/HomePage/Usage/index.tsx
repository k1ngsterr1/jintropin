import { UsageTab } from '@features/Tab__Components/UsageTab'

import styles from './styles.module.scss'

export const Usage = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.container__heading}>Как использовать <span className={styles.container__heading__span}>джинтропин?</span></h3>
            <UsageTab />
        </div>
    )
}
