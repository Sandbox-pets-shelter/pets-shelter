import  BaseButton  from '../../components/ui/BaseButton/index'
import mouse from '../../assets/images/404/MouseinHole.svg'
import mistake404 from '../../assets/images/404/404.svg'
import oh from '../../assets/images/404/oh.svg'

import s from './styles.module.scss'

export const NoMatch = () => {
  const text = '<p>Страница не найдена, ее съела наглая мышка, так как все наши кошки находятся в <u>каталоге</u></p>'

  const reset = () => {
    console.log('reset')
  }

return (
  <div className={s.noMatch}>
    <div className={s.noMatch__container}>
      <img className={s.noMatch__img} src={mouse} alt="Мышка в норке"/>
      <img className={s.noMatch__img__404} src={mistake404} alt="Ошибка 404"/>
      <img className={s.noMatch__img__oh} src={oh} alt="Ой!"/>
    </div>
    <div className={s.noMatch__content}>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
      <div className={s.noMatch__button}>
        <BaseButton
          variant='filled'
          color='primary'
          click={reset}>
          {('Вернуться назад')}
        </BaseButton>
      </div>
    </div>
  </div>
)
  }