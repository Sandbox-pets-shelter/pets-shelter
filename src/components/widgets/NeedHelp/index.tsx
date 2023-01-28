import { useTranslation } from 'react-i18next'
import { itemsNeedHelp } from '../../../mocks/needhelp'
import Arrow from '../../../assets/icons/needhelp/arrow'

import s from './styles.module.scss'

const NeedHelp = () => {

  const { t } = useTranslation()

  return (
    <div className={s.needhelp}>
      <p className={s.needhelp__title}>{t('needhelp.main_title')}</p>
      <div className={s.needhelp__container}>
        {
          itemsNeedHelp.map(item => (
            <div
              key={item.id}
              className={s.needhelp__container__item}
            >
                <div className={s.needhelp__container__img}>
                    <img
                        src={item.src}
                        alt={item.alt}
                    />
                    <div className={s.needhelp__container__img__title}>
                        <p className={s.needhelp__container__img__subtitle}>{item.subtitle}</p>
                        <p className={s.needhelp__container__img__content}>{item.content}</p>
                        <a className={s.needhelp__container__img__title__btm}href="#">{item.link}
                        <Arrow className={s.needhelp__container__img__title__btm__arr}/></a>
                        </div>
                </div>
         </div>
          ))
        }
     </div>
    </div>
  )
}

export default NeedHelp