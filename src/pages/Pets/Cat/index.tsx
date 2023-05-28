import LocationIcon from 'assets/icons/location';
import plus from 'assets/icons/mainfirst/plus.svg';
import redplus from 'assets/icons/mainfirst/redplus.svg';
import Arrow from 'assets/icons/needhelp/arrow';
import ShareIcon from 'assets/icons/Share';
import { BaseButton } from 'components';
import { Like } from 'components/like';
import ArrowButton from 'components/ui/ArrowButton';
import Actions from 'components/widgets/Actions';
import { cats } from 'mocks/cats';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ISlider } from 'types/ui';

import styles from './styles.module.scss';

export const Cat = () => {
  const [data, setData] = useState(cats);

  const handleClicked = ({ key }: any) => {
    // e.preventDefault()
    console.log(key);
    //Todo preventDefault

    const likedItem = data.map((item: any) => {
      if (item.key === key) {
        return { ...item, liked: !item.liked };
      } else return item;
    });

    setData(likedItem);
  };

  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement | null>(null);
  const slideImage = useRef<HTMLImageElement | null>(null);
  const params = useParams();
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
  const indicator = useRef<HTMLDivElement | null>(null);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        console.log('Bottom');
      } else console.log('not bottom');
    });
    if (indicator.current) observer.observe(indicator.current);
    if (slideImage.current) {
      setHeight({
        height: 4 * slideImage.current.offsetHeight + 4 * 16 + 'px'
      });
    }
    if (scrollX.side === 'right') {
      if (ref.current) {
        ref.current.scrollTop += ref.current.offsetHeight;
      }
    } else {
      if (ref.current) {
        ref.current.scrollTop -= ref.current.offsetHeight;
      }
    }
  }, [scrollX]);

  return (
    <div>
      {data
        .filter((item) => item.key === Number(params.id))
        .map((cat) => (
          <div key={cat.key}>
            <div>
              Питомцы<div className="arrow right"></div>Коты<div className="arrow right"></div>
              <div className={styles.backarrowcurr}>
                {cat.name}, {cat.age}
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.box__topInfo}>
                <div className={styles.box__title}>
                  {cat.name}, {cat.age}
                </div>{' '}
                <div className={styles.box__topInfoBtns}>
                  <LocationIcon /> В приюте «{cat.shelter}»
                </div>{' '}
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
                      {cat.src.map((slide: any, ind: number) => (
                        <div key={ind}>
                          {currIndex === ind ? (
                            <img
                              ref={slideImage}
                              src={slide.image}
                              onMouseEnter={() => goToSlide(ind)}
                              className={styles.dot_active}
                            ></img>
                          ) : (
                            <img src={slide.image} onMouseEnter={() => goToSlide(ind)} className={styles.dot}></img>
                          )}
                        </div>
                      ))}
                      <div ref={indicator}></div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleScroll({ side: 'right' })}
                    className={`arrow ${isBottom && 'arrow-disabled'} down`}
                  ></div>
                </div>
                <div>
                  <img src={cat.src[currIndex].image} alt="cat" className={styles.main__img}></img>
                  <div className={styles.box__subtitles}>История</div>
                  {cat.history}
                  <ArrowButton variant="filled" color="primary">
                    Читать далее
                  </ArrowButton>
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
                  <BaseButton variant="filled" color="accent" endIcon={plus}>
                    {t('mainfirst.urgenthelp.btn')}
                  </BaseButton>
                  <div className={styles.box__btns}>
                    <BaseButton variant="filled" color="primary">
                      Забрать домой
                    </BaseButton>
                    <Like like={cat.liked} onClick={(e: any) => handleClicked} />
                  </div>
                </div>
              </div>
            </div>
            <Actions />
            {cat.video && <div dangerouslySetInnerHTML={{ __html: cat.video }}></div>}
          </div>
        ))}
    </div>
  );
};

//Адаптивный resize слайдера с другими картинками и нижний disabled
