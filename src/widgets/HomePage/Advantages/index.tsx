import ImgTab from "@features/Tab__Components/AdventagesTab/ImgTab"

import styles from './styles.module.scss'

export const Advantages = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.container__heading}>Для каких <span className={styles.container__heading__span}>целей </span>и кому можно его <span className={styles.container__heading__span}>принимать</span>?</h2>
            <ImgTab />
        </div>
    )
}
