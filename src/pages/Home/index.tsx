import { BaseButton } from '../../components/ui/BaseButton'
import s from './styles.module.scss'
import imgBg from '../../assets/icons/home/heart-vector.png'

export const Home = () => {
    const reset = () => {
       console.log(1)
      }
    return (
        <div className={s.Home}>
            <img className={s.Home__img} src={imgBg} alt="heart"/>
            <h2>Сотрудничая с нами вы спасаете Жизни!</h2>
            <p>Если вы являетесь неравнодушным человеком, у которого<br></br>
            есть предложения по сотрудничеству с приютами, напишите нам!</p>
            <button className={s.Home__icon}>
                <BaseButton  
                    variant='filled' 
                    color='primary'
                    click={reset}>
                    Начать сотрудничать
                </BaseButton></button>
      </div>
    )
}