import ArrowleftIcon from 'assets/icons/Arrowleft';
import ArrowrightIcon from 'assets/icons/Arrowright';
import { useState, MouseEvent, useEffect } from 'react';
import { IPetPhoto } from 'types/IPet';

import style from './styles.module.scss';

export const Popup = ({
  currentIndex,
  slides,
  handleClose
}: {
  currentIndex: number;
  slides: IPetPhoto[];
  handleClose: () => void;
}) => {
  const [current, setCurrentIndex] = useState(currentIndex);
  const goToPrevious = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrentIndex(newIndex);
  };

  const clickOutside = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.className === style.popupBox) {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <div className={style.popupBox} onClick={(e) => clickOutside(e)}>
      <div className={style.box}>
        <img src={slides[current].link} alt={slides[current].link} className={style.image} />
        <ArrowleftIcon className={style.arrow__left} onClick={goToPrevious} />
        <ArrowrightIcon className={style.arrow__right} onClick={goToNext} />
        <nav className={style.amount}>
          {current + 1}/{slides.length}
        </nav>
        <div className={style.closeIcon} onClick={handleClose}></div>
      </div>
    </div>
  );
};
