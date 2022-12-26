import { useState, useEffect } from 'react'
import style from './styles.module.scss'
import { Dots } from '../dots'
import ArrowleftIcon from '../../assets/icons/Arrowleft'
import ArrowrightIcon from '../../assets/icons/Arrowright'
import IncreaseIcon from '../../assets/icons/Increase'

export const ImageSliderTwo = (props: any) => {
  const { slides, currentIndex, goToNext, goToPrevious, togglePopup } = props

  const n = slides.length

  return (
    <div className = {style.card__img}>
      <div className={style.hoverCont}>
        <div onClick={goToPrevious}></div>
        <div onClick={goToNext}></div>
      </div>
      <ArrowleftIcon className={style.arrow__left} onClick={goToPrevious}/>
      <ArrowrightIcon className={style.arrow__right} onClick={goToNext}/>
      <IncreaseIcon className={style.increase__arrow} onClick={togglePopup}/>
      <Dots slides={slides} currIndex={currentIndex} n={n}/>
    </div>
  )
}