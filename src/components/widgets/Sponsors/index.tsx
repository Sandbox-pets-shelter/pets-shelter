import { useTranslation } from 'react-i18next'

import sponsors1 from '../../../assets/icons/sponsors/Forbes.svg'
import sponsors2 from '../../../assets/icons/sponsors/Khabar.svg'
import sponsors3 from '../../../assets/icons/sponsors/KazPravda.svg'
import sponsors4 from '../../../assets/icons/sponsors/Qazaqstan.svg'
import sponsors5 from '../../../assets/icons/sponsors/Siemens.svg'
import sponsors6 from '../../../assets/icons/sponsors/KazMunayGas.svg'

import s from './styles.module.scss'

const Sponsors = () => {

  const { t } = useTranslation()

  return (
    <div className={s.sponsors}>
      <p className={s.sponsors__title}>{t('sponsors.title')}</p>
      <div className={s.sponsors__container}>
          <div className={s.sponsors__container__img}>
              <img src={sponsors1} alt="Forbes"/></div>
          <div className={s.sponsors__container__img}>    
              <img src={sponsors2} alt="Khabar"/></div>
          <div className={s.sponsors__container__img}>
              <img src={sponsors3} alt="KazPravda"/></div>
      </div>
      <div className={s.sponsors__container}>  
          <div className={s.sponsors__container__img}>    
              <img src={sponsors4} alt="Qazaqstan"/></div>
          <div className={s.sponsors__container__img}>
              <img src={sponsors5} alt="Siemens"/></div> 
          <div className={s.sponsors__container__img}>     
              <img src={sponsors6} alt="KazMunayGas"/></div>
      </div>
    </div>
  )
}

export default Sponsors