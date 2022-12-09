import { useState, useEffect } from 'react'
import style from './styles.module.scss'

export const ImageSlider = ({ slides }:any) => {
    const [ currIndex, setCurrIndex ] = useState(0)
    const goToSlide = (ind: any) => {
      setCurrIndex(ind)
    }
  return (
    <div>
        <div className={style.hoverCont}>
          <div onMouseEnter={() => goToSlide(0)}></div>
          <div onMouseEnter={() => goToSlide(1)}></div>
          <div onMouseEnter={() => goToSlide(2)}></div>
        </div>
        <img src={slides[currIndex].image} alt="cat" className={style.card__img}></img>
        <div className={style.container}>
          {slides.map((slide: any, ind: number) => (
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