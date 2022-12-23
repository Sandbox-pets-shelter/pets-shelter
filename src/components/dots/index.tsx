import { useState, useEffect } from 'react'
import style from './styles.module.scss'
import { Popup } from '../popup'

export const Dots = ({ slides, currIndex, goToSlide, n }:any) => {
  console.log(n)
  const clickMe = () => {
    console.log('куку')
  }
  const [ isOpen, setIsOpen ] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {isOpen && <Popup
          content={<>
            <b>Design your Popup</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Test button</button>
          </>}
          handleClose={togglePopup}
        />}
        <img src={slides[currIndex].image} alt="cat" className={style.card__img} onClick={togglePopup} ></img>
        <div className={style.container}>
          {slides.slice(0,n).map((slide: any, ind: number) => (
            <div key={ind}>
              {currIndex === ind ?
              <div onClick={() => goToSlide(ind)} className={style.dot_active}></div> :
              <div onClick={clickMe} className={style.dot}></div>}
            </div>
          ))}
        </div>
    </div>
  )
}