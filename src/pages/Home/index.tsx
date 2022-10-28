import { BaseButton } from '../../components/ui/BaseButton'
import s from './styles.module.scss'
import people from '../../assets/icons/home/people-cat.png'

export const Home = () => {
    const reset = () => {
       console.log(1)
      }
    return (
        <div className={s.home}>
            <img className={s.home__img} src={people} alt="Люди и кот"/>
            <p className={s.home__item1}>Сотрудничая с нами вы спасаете Жизни!</p>
            <p className={s.home__item2}>Если вы являетесь неравнодушным человеком, у которого<br></br>
            есть предложения по сотрудничеству с приютами, напишите нам!</p>
            <button className={s.home__button}>
                <BaseButton 
                    variant='filled' 
                    color='primary'
                    click={reset}>
                    Начать сотрудничать
                </BaseButton>
            </button>    
      </div>
    )
}