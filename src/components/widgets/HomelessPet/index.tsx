import { useTranslation } from 'react-i18next'

import { BaseButton } from '../../index'
import homelessPet from '../../../assets/icons/homelessPet/HomelessPet.svg'

import s from './styles.module.scss'

const HomelessPet = () => {

  const { t } = useTranslation()

  const reset = () => {
    console.log(1)
  }
  return (
    <div className={s.homelesspet}>
      <img className={s.homelesspet__img} src={homelessPet} alt="Бездомный питомец"/>
      <p className={s.homelesspet__title}>{t('homelesspet.title')}</p>
      <p className={s.homelesspet__subtitle}>{t('homelesspet.subtitle')}</p>
      <div className={s.homelesspet__button}>
        <BaseButton
          variant='filled'
          color='primary'
          click={reset}>
          Попросить поддержку
        </BaseButton>
      </div>
    </div>
  )
}

export default HomelessPet