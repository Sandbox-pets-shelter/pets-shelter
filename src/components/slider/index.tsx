import { Dots } from 'components/dots';
import { useState } from 'react';
import { IPetPhoto } from 'types/IPet';

import style from './styles.module.scss';

export const ImageSlider = ({ slides }: { slides: IPetPhoto[] }) => {
  const [currentIndex, setCurrIndex] = useState(0);
  const goToSlide = (ind: number) => {
    setCurrIndex(ind);
  };
  return (
    <div>
      <div className={style.hoverCont}>
        <div onMouseEnter={() => goToSlide(0)}></div>
        <div onMouseEnter={() => goToSlide(1)}></div>
        <div onMouseEnter={() => goToSlide(2)}></div>
      </div>
      <img src={slides[currentIndex].link} alt="cat" className={style.card__img} />
      <Dots slides={slides} currentIndex={currentIndex} />
    </div>
  );
};
