import { useTranslation } from 'react-i18next'

import { BaseButton } from '../../index'
import cooperation from '../../../assets/icons/cooperation/cooperation-image.svg'

import s from './styles.module.scss'

const Cooperation = () => {

  const { t } = useTranslation()

  const reset = () => {
    console.log(reset)
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
          {t('cooperation.btn')}
        </BaseButton>
      </div>
    </div>
  )
}

export default Cooperation