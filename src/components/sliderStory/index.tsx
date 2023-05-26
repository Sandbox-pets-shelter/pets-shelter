import ArrowleftIcon from 'assets/icons/Arrowleft';
import ArrowrightIcon from 'assets/icons/Arrowright';
import IncreaseIcon from 'assets/icons/Increase';
import { Dots } from 'components/dots';

import style from './styles.module.scss';

export const ImageSliderTwo = (props: any) => {
  const { slides, currentIndex, goToNext, goToPrevious, togglePopup, goToSlide } = props


  return (
    <div className={style.card__img}>
      <div className={style.hoverCont}>
        <div onClick={goToPrevious}></div>
        <div onClick={goToNext}></div>
      </div>
      <ArrowleftIcon className={style.arrow__left} onClick={goToPrevious} />
      <ArrowrightIcon className={style.arrow__right} onClick={goToNext} />
      <IncreaseIcon className={style.increase__arrow} onClick={togglePopup} />
      <Dots slides={slides} currentIndex={currentIndex}/>
    </div>
  );
};