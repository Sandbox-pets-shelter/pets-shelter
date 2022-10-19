import { Filters } from '../../components/filters'
import s from './styles.module.scss'

import { Card } from '../../components/card'

export const Pets = () => {
    return (
        <main className={s.main}>
            <Filters />
            <div className={s.main__content}>
            <div><Card/></div>
            </div>
        </main>
    )
}