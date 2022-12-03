import s from './styles.module.scss'
import ShareIcon from '../../assets/icons/Share.svg'
import { useState, useEffect } from 'react'
import { ImageSlider } from '../slider'
import { handleShareButton } from '../sharebtn'
import { Like } from '../like'
import { cats } from '../../mocks/cats'
import { Link } from 'react-router-dom'

export const Card = () => {
  const [ data, setData ] = useState(cats)

  const handleClicked = ( { key } :any ) => {
    const likedItem = data.map((item:any)=>{
      if(item.key === key){
        return { ...item, liked: !item.liked }
      } else return item
    })

    setData(likedItem)
  }

  return (
    <div className={s.card__section}>
      {data.map(img => (
        <Link key={img.key} to={`${img.key}`}>
          <div className={s.card}>
              <ImageSlider slides={img.src}/>
              <div className={s.card__info}>
                <div className={s.card__title}>{img.name}, {img.age}</div>
                <div className={s.card__descr}>{img.descr}</div>
                <Like className={s.card__like} like={img.liked} handleClicked={handleClicked} elem={img}/>
              </div>
              <div className={s.icon__share} onClick={handleShareButton}><img src={ShareIcon} alt="share" className={s.card__share}/></div>
          </div>
        </Link>
      ))}
    </div>
  )
}