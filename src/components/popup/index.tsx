import { useEffect } from 'react'
import style from './styles.module.scss'
import ArrowleftIcon from '../../assets/icons/Arrowleft'
import ArrowrightIcon from '../../assets/icons/Arrowright'

export const Popup = (props: any) => {
  const { currentIndex, slides, handleClose, goToNext, goToPrevious } = props

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'
  // })
  // useEffect(() => () => {
  //   document.body.style.overflow = 'auto'
  // })

  return (
    <div className={style.box}>
      <ArrowleftIcon className={style.arrow__left} onClick={goToPrevious}/>
      <ArrowrightIcon className={style.arrow__right} onClick={goToNext}/>
      <div className={style.amount}>{currentIndex + 1}/{slides.length}</div>
      <div className={style.closeIcon} onClick={handleClose}></div>
      <img src={slides[currentIndex].image} alt="cat" className={style.card__img}></img>
    </div>
  )
}


// 1. Затемнение всего body
// 2. Lock
// 3. Появление по центру страницы