import { useEffect } from 'react'
import style from './styles.module.scss'
import ArrowleftIcon from '../../assets/icons/Arrowleft'
import ArrowrightIcon from '../../assets/icons/Arrowright'
import { url } from 'inspector'

export const Popup = (props: any) => {
  const { currentIndex, slides, handleClose, goToNext, goToPrevious, togglePopup } = props

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  })
  useEffect(() => () => {
    document.body.style.overflow = 'auto'
  })

  return (
    <div className={style.popupBox} onClick={togglePopup}>
      <div className={style.box} style={{ backgroundImage: `url(${slides[currentIndex].image})`, backgroundRepeat: 'no-repeat' }}>
      <ArrowleftIcon className={style.arrow__left} onClick={goToPrevious}/>
      <ArrowrightIcon className={style.arrow__right} onClick={goToNext}/>
      <div className={style.amount}>{currentIndex + 1}/{slides.length}</div>
      <div className={style.closeIcon} onClick={handleClose}></div>
    </div>
    </div>
  )
}

// TooglePopup onclick black background
// Fix Dots and GotoPrev/GotoNext
// Главная картинка we need to add fixed height object-fit: cover