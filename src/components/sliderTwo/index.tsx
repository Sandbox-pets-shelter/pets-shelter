import { useState, useEffect } from 'react'
import style from './styles.module.scss'
import { Dots } from '../dots'
import ArrowleftIcon from '../../assets/icons/Arrowleft'
import ArrowrightIcon from '../../assets/icons/Arrowright'
import IncreaseIcon from '../../assets/icons/Increase'
import { Popup } from '../popup'

export const ImageSliderTwo = (props: any) => {
  const { slides, isOpen, togglePopup } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const goToSlide = (ind: any) => {
    //Не работает dots
    setCurrentIndex(ind)
  }

  const n = slides.length

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className = {style.card__img}>
      {isOpen && <Popup
        slides={slides}
        currentIndex={currentIndex}
        handleClose={togglePopup}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
      />}
      <div className={style.hoverCont}>
        <div onClick={goToPrevious}></div>
        <div onClick={goToNext}></div>
      </div>
      <ArrowleftIcon className={style.arrow__left} onClick={goToPrevious}/>
      <ArrowrightIcon className={style.arrow__right} onClick={goToNext}/>
      <IncreaseIcon className={style.increase__arrow} onClick={togglePopup}/>
      <Dots slides={slides} currIndex={currentIndex} goToSlide={goToSlide} n={n}/>
    </div>
  )
}