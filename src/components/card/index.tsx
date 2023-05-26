import getPets from 'api/pets';
import arrowleft from 'assets/icons/arrowleft.svg';
import arrowright from 'assets/icons/arrowright.svg';
import LikeIcon from 'assets/icons/Heart';
import ShareIcon from 'assets/icons/Share';
import { BaseButton } from 'components';

import { handleShareButton } from 'components/sharebtn';
import { ImageSlider } from 'components/slider';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ICard } from 'types/ICard';

import s from './styles.module.scss'


export const Card = () => {
  const [ pets, setPets ] = useState<ICard[]>()

  useEffect(() => {
    const url = 'http://158.160.4.84:9000/v1/pet?page=0&size=10'
    getPets(url).then(response => {
      setPets(response.content)
    })
}, [])


  const [ page, setPage ] = useState(0)
  const dataPerPage = 6
  const numberOfdataVistited = page * dataPerPage
  const totalPages = pets ? Math.ceil(pets.length / dataPerPage) : 0
  const changePage = ({ selected }: { selected: number }) => {
    setPage(selected)
  }
  const displayData = pets?.map((pet) => {
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