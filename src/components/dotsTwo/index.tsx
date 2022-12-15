import { useState, useEffect } from 'react'
import style from './styles.module.scss'

export const Dots = ({ slides, currentIndex, goToSlide, n }:any) => {
  return (
    <div>
        <img src={slides[currentIndex].image} alt="cat" className={style.card__img}></img>
        <div className={style.container}>
          {slides.map((slide: any, ind: number) => (
            <div key={ind}>
              {currentIndex === ind ?
              <div onClick={() => goToSlide(ind)} className={style.dot_active}></div> :
              <div onClick={() => goToSlide(ind)} className={style.dot}></div>}
            </div>
          ))}
        </div>
    </div>
  )
}