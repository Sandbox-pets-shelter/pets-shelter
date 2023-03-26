import arrowleft from 'assets/icons/arrowleft.svg';
import arrowright from 'assets/icons/arrowright.svg';
import ShareIcon from 'assets/icons/Share';
import { BaseButton } from 'components';
import { Like } from 'components/Like';
import { handleShareButton } from 'components/ShareBtn';
import { ImageSlider } from 'components/Slider';
import { cats } from 'mocks/cats';
import { useState } from 'react';

import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

import s from './styles.module.scss';

export const Card = () => {
  const [data, setData] = useState(cats);

  const handleClicked = (e: any, { key }: any) => {
    e.preventDefault();

    const likedItem = data.map((item: any) => {
      if (item.key === key) {
        return { ...item, liked: !item.liked };
      } else return item;
    });

    setData(likedItem);
  };

  const [page, setPage] = useState(0);
  const dataPerPage = 6;
  const numberOfdataVistited = page * dataPerPage;
  const totalPages = Math.ceil(data.length / dataPerPage);
  const changePage = ({ selected }: any) => {
    setPage(selected);
  };
  const displayData = data.slice(numberOfdataVistited, numberOfdataVistited + dataPerPage).map((img) => {
    return (
      <Link key={img.key} to={`${img.key}`}>
        <div className={s.card}>
          <ImageSlider slides={img.src} />
          <div className={s.card__info}>
            <div className={s.card__title}>
              {img.name}, {img.age}
            </div>
            <div className={s.card__descr}>{img.descr}</div>
            <Like className={s.card__like} like={img.liked} handleClicked={handleClicked} elem={img} />
          </div>
          <div className={s.icon__share} onClick={handleShareButton}>
            <ShareIcon className={s.card__share} />
          </div>
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

//Todo поменять количество карточек в одной странице
