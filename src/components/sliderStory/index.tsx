import ArrowleftIcon from 'assets/icons/Arrowleft';
import ArrowrightIcon from 'assets/icons/Arrowright';
import IncreaseIcon from 'assets/icons/Increase';
import { Dots } from 'components/dots';
import { IPetPhoto } from 'types/IPet';

import style from './styles.module.scss';

type SliderProps = {
  slides: IPetPhoto[];
  currentIndex: number;
  goToNext: () => void;
  goToPrevious: () => void;
  togglePopup: () => void;
};

export const ImageSliderTwo = (props: SliderProps) => {
  const { slides, currentIndex, goToNext, goToPrevious, togglePopup } = props;

  return (
    <div className={style.card__img}>
      <div className={style.hoverCont}>
        <div onClick={goToPrevious}></div>
        <div onClick={goToNext}></div>
      </div>
      <ArrowleftIcon className={style.arrow__left} onClick={goToPrevious} />
      <ArrowrightIcon className={style.arrow__right} onClick={goToNext} />
      <IncreaseIcon className={style.increase__arrow} onClick={togglePopup} />
      <img src={slides[currentIndex].link} alt="cat" className={style.card__img} />
      <Dots slides={slides} currentIndex={currentIndex} />
    </div>
  );
};
