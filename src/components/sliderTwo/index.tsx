import { useState, useEffect } from 'react'
import style from './styles.module.scss'
import { Dots } from '../dotsTwo'
import ArrowleftIcon from '../../assets/icons/Arrowleft'
import ArrowrightIcon from '../../assets/icons/Arrowright'
// import Dot from '../../assets/icons/Dot'

export const ImageSliderTwo = ({ slides }: any) => {
    const [ currentIndex, setCurrentIndex ] = useState(0)

    const goToSlide = (ind: any) => {
      setCurrentIndex(ind)
    }

    const n = 10

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
        <div className={style.arrow__right} onClick = {goToNext}><ArrowrightIcon/></div>
        <div className={style.hoverCont}>
          <div onClick = {() => goToSlide(0)}></div>
          <div onClick = {() => goToSlide(1)}></div>
          <div onClick = {() => goToSlide(2)}></div>
          <div onClick = {() => goToSlide(3)}></div>
        </div>
        <Dots slides={slides} currentIndex={currentIndex} goToSlide={goToSlide} n={n}/>
    </div>
  )
}