import LikeIcon from 'assets/icons/Heart';
import LocationIcon from 'assets/icons/location';
import { BaseButton } from 'components';

import ArrowButton from 'components/ui/ArrowButton';
import Share from 'components/ui/Share';
import Actions from 'components/widgets/Actions';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { fetchPetsData } from 'store/petsStore/actions';
import { selectPet } from 'store/petsStore/selectors';
import { ActionsType } from 'store/petsStore/types';
import { IPetStore } from 'store/petsStore/types';
import { Gender, Med, Character, Wool, Size, IPetPhoto } from 'types/IPet';

import styles from './styles.module.scss';

export const Pet = () => {
  const dispatch = useDispatch<ThunkDispatch<IPetStore, {}, ActionsType>>();
  const pet = useSelector(selectPet);

  const params = useParams();
  useEffect(() => {
    dispatch(fetchPetsData(`${params.id}`));
  }, []);
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement | null>(null);
  const slideImage = useRef<HTMLImageElement | null>(null);

  const [currIndex, setCurrIndex] = useState(0);
  const goToSlide = (ind: number) => {
    setCurrIndex(ind);
  };
  const [scrollX, setScrollX] = useState({
    side: ''
  });

  const handleScroll = (data: { side: string }) => {
    setScrollX((prev) => ({ ...prev, side: data.side }));
  };
  const [height, setHeight] = useState({});

  useEffect(() => {
    if (slideImage.current) {
      const calculateHeight = 4 * slideImage.current.offsetHeight + 4 * 16 + 'px';
      setHeight({ height: calculateHeight });
    }
    if (scrollX.side === 'right') {
      if (ref.current) {
        ref.current.scrollTop += ref.current.offsetHeight;
      }
    } else if (scrollX.side === 'left') {
      if (ref.current) {
        ref.current.scrollTop -= ref.current.offsetHeight;
      }
    }
  }, [scrollX]);
  return (
    <div>
      <div key={pet?.id}>
        <nav>
          Питомцы<div className="arrow right"></div>Коты<div className="arrow right"></div>
          <div className={styles.backarrowcurr}>
            {pet?.name}, {pet?.age}
          </div>
        </nav>
        <div className={styles.box}>
          <div className={styles.box__topInfo}>
            <h1 className={styles.box__title}>
              {pet?.name}, {pet?.age}
            </h1>
            <button className={styles.box__topInfoBtns}>
              <LocationIcon /> В приюте «{pet?.shelter.name}»
            </button>
            <button className={styles.box__topInfoBtns}>
              <Share link={window.location.href} btn="share" />
            </button>
          </div>
          <div className={styles.content}>
            <div className={styles.sliderWrapper}>
              <button
                onClick={() => handleScroll({ side: 'left' })}
                className={ref.current?.scrollTop === 0 ? 'arrow arrow-disabled up' : 'arrow up'}
              ></button>
              <div>
                <div ref={ref} style={height} className={styles.sliderLine}>
                  {pet?.photos.map((slide: IPetPhoto, ind: number) => (
                    <div key={ind}>
                      {currIndex === ind ? (
                        <img
                          ref={slideImage}
                          src={slide.link}
                          onMouseEnter={() => goToSlide(ind)}
                          className={`${styles.slide_active} ${styles.slide}`}
                        ></img>
                      ) : (
                        <img src={slide.link} onMouseEnter={() => goToSlide(ind)} className={styles.slide}></img>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleScroll({ side: 'right' })}
                className={ref.current?.scrollTop === 480 || 720 ? 'arrow arrow-disabled down' : 'arrow down'}
              ></button>
            </div>
            <div>
              <img src={pet?.photos[currIndex].link} alt="cat" className={styles.main__img}></img>
              <h2 className={styles.box__subtitles}>История</h2>
              {pet?.history}
              <ArrowButton variant="filled" color="primary">
                Читать далее
              </ArrowButton>
            </div>
            <div className={styles.box__info}>
              <div className={styles.box__infogr}>
                <h2 className={styles.box__subtitles}>Основная информация</h2>
                <p>{Gender[pet?.gender]}</p>
                <p>Размер {Size[pet?.size]}</p>
                <p>Окрас {pet?.color}</p>
                <p>{Wool[pet?.wool]}</p>
                <p>Характер {Character[pet?.character]}</p>
                <p>{pet?.home}</p>
              </div>
              {pet?.med && Object.values(pet?.med).length !== 0 && (
                <div className={styles.box__infogr}>
                  <h2 className={styles.box__subtitles}>Ветеринарные данные</h2>
                  {Object.values(pet?.med).map((med, index) => (
                    <p key={index}>{Med[med]}</p>
                  ))}
                </div>
              )}
              <BaseButton variant="filled" color="accent">
                {t('mainfirst.urgenthelp.btn')}
              </BaseButton>
              <div className={styles.box__btns}>
                <BaseButton variant="filled" color="primary">
                  {t('mainfirst.urgenthelp.btn2')}
                </BaseButton>
                <LikeIcon active />
              </div>
            </div>
          </div>
        </div>
        <Actions />
        {pet?.video && (
          <iframe
            src={pet?.video}
            title={pet?.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}
      </div>
    </div>
  );
};
