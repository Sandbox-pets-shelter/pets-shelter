import { Filters } from '../../components/index'

import s from './styles.module.scss'

import { Card } from '../../components/card'
import { Paginate } from '../../components/card'


export const Pets = () => {
    return (
        <main className={s.main}>
            <Filters />
            <div className={s.main__content}>
            <Card/>
            <Paginate/>
            </div>
        </main>
    )
}