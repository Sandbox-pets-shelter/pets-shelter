import { useState, useEffect } from 'react'
import style from './styles.module.scss'
import { Dots } from '../dots'
import ArrowleftIcon from '../../assets/icons/Arrowleft'
import ArrowrightIcon from '../../assets/icons/Arrowright'

export const ImageSliderTwo = ({ slides }: any) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const goToSlide = (ind: any) => {
    //Не работает
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
      <ArrowleftIcon className={style.arrow__left} onClick = {goToPrevious}/>
      <ArrowrightIcon className={style.arrow__right} onClick = {goToNext}/>
      <Dots slides={slides} currIndex={currentIndex} goToSlide={goToSlide} n={n}/>
    </div>
  )
}