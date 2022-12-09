import s from './styles.module.scss'
import ShareIcon from '../../assets/icons/Share.svg'
import arrowleft from '../../assets/icons/arrowleft.svg'
import arrowright from '../../assets/icons/arrowright.svg'
import { useState, useEffect } from 'react'
import { ImageSlider } from '../slider'
import { handleShareButton } from '../sharebtn'
import { Like } from '../like'
import { cats } from '../../mocks/cats'
import { BaseButton } from '../index'
import { useTranslation } from 'react-i18next'
// import ReactPaginate from 'react-paginate'

export const Card = () => {
 
  const [ data, setData ] = useState(cats)
  
  const handleClicked = ({ key } :any) => {
    // console.log(key)
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
            <div key={img.key} className={s.card}>
                <ImageSlider slides={img.src}/>
                <div className={s.card__info}>
                  <div className={s.card__title}>{img.name}, {img.age}</div>
                  <div className={s.card__descr}>{img.descr}</div>
                  <Like className={s.card__like} like={img.liked} handleClicked={handleClicked} elem={img}/>
                </div>
                <div className={s.icon__share} onClick={handleShareButton}><img src={ShareIcon} alt="share" className={s.card__share}/></div>
            </div>
        ))}
    </div>
  )
}
export const Paginate = () => {

  const [ page, setPage ] = useState(0)
  const [ data, setData ] = useState(cats)
  const dataPerPage = 3
  const numberOfdataVistited = page * dataPerPage
  console.log(numberOfdataVistited)
  const displayData = data
    .slice(
      numberOfdataVistited,
      numberOfdataVistited + dataPerPage
    )

  const { t } = useTranslation()

  const reset = () => {
      console.log('reset')
    }
  return (
<div className={s.paginate__button}>
  <div className={s.paginate__button__prev}>
  <BaseButton
      variant='outlined'
      color='primary'
      click={reset}>
      <img src={arrowleft} alt="Стрелка влево"/>
      {t('Предыдущая страница')}
    </BaseButton>
  </div>
  <div className={s.paginate__button__next}>
    <BaseButton
      variant='filled'
      color='primary'
      click={reset}>
      {t('Следующая страница')}
      <img src={arrowright} alt="Стрелка вправо"/>
    </BaseButton>
    </div>
</div>)
}
// return (<div className='App'> ({displayData})</div>)


    // <ReactPaginate
    // previousLabel={"Previous"}
    // nextLabel={"Next"}
    // pageCount={totalPages}
    // onPageChange={changePage}
    // containerClassName={"navigationButtons"}
    // previousLinkClassName={"previousButton"}
    // nextLinkClassName={"nextButton"}
    // disabledClassName={"navigationDisabled"}
    // activeClassName={"navigationActive"}
    // />
