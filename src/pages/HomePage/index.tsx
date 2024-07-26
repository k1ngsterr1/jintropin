import { Header } from '@features/Header/index'
import { Main } from '@widgets/HomePage/Main'
import { Application } from '@widgets/HomePage/Application'
import { Usage } from '@widgets/HomePage/Usage'
import { Advantages } from '@widgets/HomePage/Advantages'
import { Contraindications } from '@widgets/HomePage/Contraindications'
import { VideoBlock } from '@widgets/HomePage/VideoBlock'
import { Certificate } from '@widgets/HomePage/Сertificate'


import styles from './styles.module.scss'

export const HomePage = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Main />
            <Application />
            <Usage />
            <Advantages />
            <Contraindications />
            <VideoBlock />
            <Certificate />
        </div>
    )
}
