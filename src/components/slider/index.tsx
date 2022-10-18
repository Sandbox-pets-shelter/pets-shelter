import { useState, useEffect } from 'react'
import s from './styles.module.scss'

export const ImageSlider = ({ slides }:any) => {
    const [currIndex, setCurrIndex] = useState(0)
    const goToSlide = (ind: any) => {
      setCurrIndex(ind)
    }
  return (
    <div>
        <img src={slides[currIndex].image} alt="cat"></img>
        <div className={s.container}>
          {slides.map((slide: any, ind: number) => (
            <div key={ind} onClick={() => goToSlide(ind)} className={s.dot}></div>
          ))}
        </div>
    </div>
  )
}