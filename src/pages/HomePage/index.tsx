import { Header } from '@features/Header/index'
import { Main } from '@widgets/HomePage/Main'
import { Advantages } from '@widgets/HomePage/Advantages'
import { Usage } from '@widgets/HomePage/Usage'

export const HomePage = () => {
    return (
        <div>
            <Header />
            <Main />
            <Advantages />
            <Usage />
        </div>
    )
}
