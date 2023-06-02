import LikeIcon from 'assets/icons/Heart';
import LocationIcon from 'assets/icons/location';
import plus from 'assets/icons/mainfirst/plus.svg';
import ShareIcon from 'assets/icons/Share';
import { BaseButton } from 'components';

import ArrowButton from 'components/ui/ArrowButton';
import Actions from 'components/widgets/Actions';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { IPet, Gender, Character, Wool, Size } from 'types/IPet';

import { PetPhoto } from 'types/IPetPhoto';

import styles from './styles.module.scss';


export const Pet = () => {
  const [pet, setPet] = useState<IPet>()

  const params = useParams()

  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement | null>(null);
  const slideImage = useRef<HTMLImageElement | null>(null);

  const [currIndex, setCurrIndex] = useState(0);
  const goToSlide = (ind: any) => {
    setCurrIndex(ind);
  };
  const [scrollX, setScrollX] = useState({
    side: ''
  });

  const handleScroll = (data: any) => {
    setScrollX((prev) => ({ ...prev, side: data.side }));
  };
  const [height, setHeight] = useState({});

  useEffect(() => {
    if (slideImage.current) {
      setHeight({
        height: 4 * slideImage.current.offsetHeight + 4 * 16 + 'px'
      });
    }
    if (scrollX.side === 'right') {
      if (ref.current) {
        ref.current.scrollTop += ref.current.offsetHeight;
      }
    } else if(scrollX.side === 'left') {
      if (ref.current) {
        ref.current.scrollTop -= ref.current.offsetHeight;
      }
    }
  }, [scrollX]);
  console.log(pet?.med)
  return (
    <div>
      <div key={pet?.id}>
        <div>
          Питомцы<div className="arrow right"></div>Коты<div className="arrow right"></div>
          <div className={styles.backarrowcurr}>
            {pet?.name}, {pet?.age}
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.box__topInfo}>
            <div className={styles.box__title}>
              {pet?.name}, {pet?.age}
            </div>
            <div className={styles.box__topInfoBtns}>
              <LocationIcon /> В приюте «{pet?.shelter.name}»
            </div>
            <div className={styles.box__topInfoBtns}>
              Поделиться в соцсетях <ShareIcon className={styles.share} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.sliderWrapper}>
              <div
                onClick={() => handleScroll({ side: 'left' })}
                className={ref.current?.scrollTop === 0 ? 'arrow arrow-disabled up' : 'arrow up'}
              ></div>
              <div>
                <div ref={ref} style={height} className={styles.sliderLine}>
                  {pet?.photos.map((slide: PetPhoto, ind: number) => (
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
              <div
                onClick={() => handleScroll({ side: 'right' })}
                className={ref.current?.scrollTop === 480 || 720 ? 'arrow arrow-disabled down' : 'arrow down'}
              ></div>
            </div>
            <div>
              <img src={pet?.photos[currIndex].link} alt="cat" className={styles.main__img}></img>
              <div className={styles.box__subtitles}>История</div>
              {pet?.history}
              <ArrowButton variant="filled" color="primary">
                Читать далее
              </ArrowButton>
            </div>
            <div className={styles.box__info}>
              <div className={styles.box__infogr}>
                <div className={styles.box__subtitles}>Основная информация</div>
                <div>{pet?.gender === Gender.male ? 'Мальчик' : 'Девочка'}</div>
                <div>Размер {pet?.size === Size.average ? 'средний' : pet?.size === Size.big ? 'больщой' : 'маленький'}</div>
                <div>Окрас {pet?.color}</div>
                <div>{pet?.character}</div>
                <div>{pet?.home}</div>
              </div>
              <div className={styles.box__infogr}>
                <div className={styles.box__subtitles}>Ветеринарные данные</div>
                {/* {pet?.med.map(med: string => (
                  {<div>Чипирован</div>}
                  {<div>Вакцинирован</div>}
                  {<div>Стерилизован</div>}
                  {<div>Есть ветпаспорт</div>}
                  {<div>Обработан от паразитов</div>}
                )) TODO */}
              </div>
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
        {pet?.video &&
        <iframe src={`https://${pet?.video}`} title={pet?.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}
      </div>
    </div>
  );
};
