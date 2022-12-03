import { Filters } from '../../components/index'

import s from './styles.module.scss'

import { Card } from '../../components/card'

export const Pets = () => {

    let test = ( key:number) => {
        console.log(key)
    }

    return (
        <main className={s.main}>
            <Filters />
            <div className={s.main__content}>
                <Card/>
            </div>
        </main>
    )
}