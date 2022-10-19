import { useState, useEffect } from 'react'
import s from './styles.module.scss'

export const ImageSlider = ({ slides }:any) => {
    const [currIndex, setCurrIndex] = useState(0)
    const goToSlide = (ind: any) => {
      setCurrIndex(ind)
    }
  return (
    <div>
        <div className={s.hoverCont}>
          <div onMouseEnter={() => goToSlide(0)}></div>
          <div onMouseEnter={() => goToSlide(1)}></div>
          <div onMouseEnter={() => goToSlide(2)}></div>
        </div>
        <img src={slides[currIndex].image} alt="cat" className={s.card__img}></img>
        <div className={s.container}>
          {slides.map((slide: any, ind: number) => (
            <div key={ind}>
              {currIndex === ind ?
              <div onClick={() => goToSlide(ind)} className={s.dot_active}></div> :
              <div onClick={() => goToSlide(ind)} className={s.dot}></div>}
            </div>
          ))}
        </div>
    </div>
  )
}