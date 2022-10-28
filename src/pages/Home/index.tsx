import { useTranslation } from 'react-i18next'

import { BaseButton } from '../../components/index'
import people from '../../assets/icons/home/people-cat.png'

import s from './styles.module.scss'

export const Home = () => {

  const { t } = useTranslation()

  const reset = () => {
    console.log(1)
  }
  return (
    <div className={s.home}>
      <img className={s.home__img} src={people} alt="Люди и кот"/>
      <p className={s.home__title}>{t('cooperation.title')}</p>
      <p className={s.home__subtitle}>{t('cooperation.subtitle')}</p>
      <div className={s.home__button}>
        <BaseButton
          variant='filled'
          color='primary'
          click={reset}>
          Начать сотрудничать
        </BaseButton>
      </div>
    </div>
  )
}