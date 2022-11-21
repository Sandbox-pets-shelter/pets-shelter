import { useTranslation } from 'react-i18next'
import { iconsNeedHelp } from '../../../mocks/needhelp'
import arrow from '../../../assets/icons/needhelp/arrow.svg'

import s from './styles.module.scss'

const NeedHelp = () => {

  const { t } = useTranslation()

  return (
    <div className={s.needhelp}>
      <p className={s.needhelp__title}>{t('needhelp.title')}</p>
      <div className={s.needhelp__container}>
        {
          iconsNeedHelp.map(icon => (
            <div
              key={icon.id}
              className={s.needhelp__container__item}
            >
                <figure className={s.needhelp__container__img}> 
                    <img
                        src={icon.src}
                        alt={icon.alt}
                    />
                    <figcaption className={s.needhelp__container__img__title}>
                        <p className={s.needhelp__container__img__subtitle}>{icon.subtitle}</p>
                        <p className={s.needhelp__container__img__content}>{icon.content}</p>
                        <a className={s.needhelp__container__img__title__btm}href="#">{icon.link}
                        <img className={s.needhelp__container__img__title__btm__arr}src={arrow} alt="Стрелка"/></a>
                        </figcaption>
                </figure> 
         </div>
          ))
        }
     </div>
    </div>
  )
}

export default NeedHelp