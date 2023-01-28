import { useState, useEffect } from 'react'
import style from './styles.module.scss'

export const Dots = ({ slides, currIndex, goToSlide, n }:any) => {
  // console.log(n)
  
  return (
    <div>
      <img src={slides[currIndex].image} alt="cat" className={style.card__img}></img>
      <div className={style.container}>
        {slides.slice(0,n).map((slide: any, ind: number) => (
          <div key={ind}>
            {currIndex === ind ?
            <div onClick={() => goToSlide(ind)} className={style.dot_active}></div> :
            <div onClick={() => goToSlide(ind)} className={style.dot}></div>}
          </div>
        ))}
      </div>
    </div>
  )
}