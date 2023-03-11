import { useEffect } from 'react'

import { useState } from 'react'

import { MouseEvent } from 'react'

import style from './styles.module.scss'

import ArrowleftIcon from '../../assets/icons/Arrowleft'

import ArrowrightIcon from '../../assets/icons/Arrowright'



export const Popup = ({ currentIndex, slides, handleClose }: { currentIndex: number, slides: Array<any>, handleClose: any }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  });

  useEffect(() => () => {
    document.body.style.overflow = 'auto';
  });

  const [ current, setCurrentIndex ] = useState(currentIndex)
  const goToPrevious = () => {
      const isFirstSlide = current === 0
      const newIndex = isFirstSlide ? slides.length - 1 : current - 1
      setCurrentIndex(newIndex)
  }

  const goToNext = (key: any) => {
    const isLastSlide = current === slides.length - 1
    const newIndex = isLastSlide ? 0 : current + 1
    setCurrentIndex(newIndex)
  }

  const clickOutside = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    const target = e.target as HTMLElement
    if(target.className === style.popupBox) {
      handleClose()
    }
  }

  return (
    <>
      <div className={style.popupBox} onClick={e => clickOutside(e)}>
        <div className={style.box}>
          <img src={slides[current].image} alt={slides[current].image} className={style.image}/>
          <ArrowleftIcon className={style.arrow__left} onClick={goToPrevious}/>
          <ArrowrightIcon className={style.arrow__right} onClick={goToNext}/>
          <div className={style.amount}>{current + 1}/{slides.length}</div>
          <div className={style.closeIcon} onClick={handleClose}></div>
        </div>
    </div>
    </>
  )
}