import { useTranslation } from 'react-i18next'

import { BaseButton } from '../../components/index'
import cooperation from '../../assets/icons/home/cooperation-image.svg'

import s from './styles.module.scss'

export const Home = () => {

  const { t } = useTranslation()

  const reset = () => {
    console.log(1)
  }
  return (
    <div className={s.cooperation}>
      <img className={s.cooperation__img} src={cooperation} alt="Сотрудничество"/>
      <p className={s.cooperation__title}>{t('cooperation.title')}</p>
      <p className={s.cooperation__subtitle}>{t('cooperation.subtitle')}</p>
      <div className={s.cooperation__button}>
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