import arrowleft from 'assets/icons/arrowleft.svg';
import arrowright from 'assets/icons/arrowright.svg';
import LikeIcon from 'assets/icons/Heart';
import ShareIcon from 'assets/icons/Share';
import { BaseButton } from 'components';

import { handleShareButton } from 'components/sharebtn';
import { ImageSlider } from 'components/slider';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from 'store/petsStore/actions';
import { selectPets } from 'store/petsStore/selectors';
import { IPet } from 'types/IPet';

import s from './styles.module.scss'


export const Card = () => {
  const [ pets, setPets ] = useState<IPet[]>()

  const [ page, setPage ] = useState<number>(0)
  const cardsPerPage = 9

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData(page, cardsPerPage))
    // setPets(useSelector(selectPets))
  })

  // const pets = useSelector(selectPets)

  useEffect(() => {
    dispatch(fetchData(page, cardsPerPage))
  }, [dispatch, page])

  const displayData = pets && pets.map((pet) => {
        return (
          <Link key={pet.id} to={`${pet.id}`} state={pet}>
            <div className={s.card}>
                <ImageSlider slides={pet.photos.slice(0, 3)}/>
                <div className={s.card__info}>
                  <h1 className={s.card__title}>{pet.name}, {pet.age}</h1>
                  <p className={s.card__descr}>{pet.history}</p>
                  <LikeIcon className={s.card__like} active={false}/>
                </div>
                <div className={s.icon__share} onClick={handleShareButton}><ShareIcon className={s.card__share}/></div>
            </div>
      </Link>
    );
  });

  return (
    <div>
      <div className={s.card__content}>{displayData}</div>
    </div>
  );
};