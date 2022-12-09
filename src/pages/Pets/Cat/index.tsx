import { useState, useRef, useEffect } from 'react'
import { cats } from '../../../mocks/cats'
import { useParams } from 'react-router-dom'
import styles from './styles.module.scss'

import LocationIcon from '../../../assets/icons/location'
import ShareIcon from '../../../assets/icons/Share'
import arrow from '../../../assets/icons/needhelp/arrow.svg'

export const Cat = () => {
    const ref:any = useRef()
    const params = useParams()
    const [ currIndex, setCurrIndex ] = useState(0)
    const goToSlide = (ind: any) => {
      setCurrIndex(ind)
    }
    const [ scrollX, setScrollX ] = useState({
        side: ''
      })
    const handleScroll = (data: any) => {
        setScrollX(prev => ({ ...prev, side: data.side }))
      }
    useEffect(() => {
        if (scrollX.side === 'right') {
            // ref.current.scroll(100,0)
            setCurrIndex(currIndex + 1)
            if(currIndex === cats.filter(item => item.key === Number(params.id)).map(cat => cat.src.length)[0] - 1) {
                setCurrIndex(0)
            }
            //Всетаки scrollLeft попробовать чтобы был скролл
        } else {
            setCurrIndex(currIndex - 1)
            if(currIndex === 0) {
                setCurrIndex(cats.filter(item => item.key === Number(params.id)).map(cat => cat.src.length)[0] - 1)
            }
        }
      }, [ scrollX ])

    return (
        <div>
            {cats.filter((item) => item.key === Number(params.id)).map((cat) => (
                <div key={cat.key}>
                    <div>Питомцы<div className='arrow right'></div>Коты<div className='arrow right'></div><div className={styles.backarrowcurr}>{cat.name}, {cat.age}</div></div>
                    <div className={styles.box}>
                        <div className={styles.box__topInfo}><div className={styles.box__title}>{cat.name}, {cat.age}</div> <div className={styles.box__topInfoBtns}><LocationIcon/> В приюте «{cat.shelter}»</div> <div className={styles.box__topInfoBtns}>Поделиться в соцсетях <ShareIcon className={styles.share}/></div></div>
                        <div className={styles.content}>
                            <div className={styles.sliderWrapper}>
                            <div onClick={() => handleScroll({ side: 'left' })} className='arrow up'></div>
                            <div>
                            <div ref={ref} className={styles.sliderLine}>
                                {cat.src.map((slide: any, ind: number) => (
                                    <div key={ind}>
                                    {currIndex === ind ?
                                    <img src={slide.image} onClick={() => goToSlide(ind)} className={styles.dot_active}></img> :
                                    <img src={slide.image} onClick={() => goToSlide(ind)} className={styles.dot}></img>}
                                    </div>
                                ))}
                            </div>
                            </div>
                            <div onClick={() => handleScroll({ side: 'right' })} className='arrow down'></div>
                            </div>
                            <div>
                                <img src={cat.src[currIndex].image} alt="cat" className={styles.main__img}></img>
                                <div className={styles.box__subtitles}>История</div>
                                {cat.history}
                                <a className={styles.box__historyBtn} href="#">Читать далее <img src={arrow} alt="arrow" /></a>
                            </div>
                            <div className={styles.box__info}>
                                <div className={styles.box__infogr}>
                                    <div className={styles.box__subtitles}>Основная информация</div>
                                    <div>{cat.gender}</div>
                                    <div>Размер {cat.size}</div>
                                    <div>Окрас {cat.color}</div>
                                    <div>{cat.type}</div>
                                    <div>{cat.family}</div>
                                </div>
                                <div className={styles.box__infogr}>
                                    <div className={styles.box__subtitles}>Ветеринарные данные</div>
                                    {cat.chipped && <div>Чипирован</div>}
                                    {cat.vaccinated && <div>Вакцинирован</div>}
                                    {cat.sterilized && <div>Стерилизован</div>}
                                    {cat.passport && <div>Есть ветпаспорт</div>}
                                    {cat.treated && <div>Обработан от паразитов</div>}
                                </div>
                                {/* Todo */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

//Смена главной картинки по наведению вместо по нажатию
//При нажатии наверх вниз сдвигается только сам родительский слайдер