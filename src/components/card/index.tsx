import { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import ReactPaginate from 'react-paginate'

import { Link } from 'react-router-dom'

import s from './styles.module.scss'

import getCards from '../../api/cards'

import arrowleft from '../../assets/icons/arrowleft.svg'

import arrowright from '../../assets/icons/arrowright.svg'

import ShareIcon from '../../assets/icons/Share'

import { ICard } from '../../types/ICard'

import { BaseButton } from '../index'

import { Like } from '../like'
// import { cats } from '../../mocks/cats'
import { handleShareButton } from '../sharebtn'

import { ImageSlider } from '../slider'

export const Card = () => {
  const [ pets, setPets ] = useState<ICard[]>()

  useEffect(() => {
    const url = 'http://den-kochanovskiy.space:9000/pet'
    getCards(url).then(response => {
      console.log(response)
      setPets(response)
    })
}, [])

  const handleClicked = (e: any, { key }: any) => {
    e.preventDefault();
    console.log(key);
    //Todo preventDefault

    const likedItem = pets?.map((item:any)=>{
      if(item.key === key){
        return { ...item, liked: !item.liked }
      } else return item
    })

    setPets(likedItem)
  }

  const [ page, setPage ] = useState(0)
  const dataPerPage = 6
  const numberOfdataVistited = page * dataPerPage
  const totalPages = pets ? Math.ceil(pets.length / dataPerPage) : 0
  const changePage = ({ selected }: any) => {
    setPage(selected)
  }
  const displayData = pets?.slice(
        numberOfdataVistited,
        numberOfdataVistited + dataPerPage
      ).map((pet) => {
        return (
          <Link key={pet.id} to={`${pet.id}`}>
            <div className={s.card}>
                <ImageSlider slides={pet.images}/>
                <div className={s.card__info}>
                  <div className={s.card__title}>{pet.name}, {pet.age}</div>
                  <div className={s.card__descr}>{pet.history}</div>
                  <Like className={s.card__like} like={pet.liked} handleClicked={handleClicked} elem={pet}/>
                </div>
                <div className={s.icon__share} onClick={handleShareButton}><ShareIcon className={s.card__share}/></div>
            </div>
      </Link>
    );
  });

  return (
    <div>
      <div className={s.card__content}>{displayData}</div>
      <ReactPaginate
        previousLabel={
          page !== 0 && (
            <BaseButton variant="outlined" color="secondary">
              <img src={arrowleft} alt="Стрелка влево" />
              {'Предыдущая страница'}
            </BaseButton>
          )
        }
        nextLabel={
          page !== totalPages - 1 && (
            <BaseButton variant="filled" color="primary">
              {'Следующая страница'}
              <img src={arrowright} alt="Стрелка вправо" />
            </BaseButton>
          )
        }
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={s.paginate__button}
        disabledClassName={'navigationDisabled'}
        activeClassName={s.navigationActive}
        nextClassName={s.floatRight}
        previousClassName={s.floatLeft}
        pageClassName={s.pageDiv}
      />
    </div>
  );
};