import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

// import biggestHeart from '../../../assets/icons/sliderAnimationCats/biggestHeart.svg';
import centerCat from '../../../assets/icons/sliderAnimationCats/center-cat.svg';
import editIcon from '../../../assets/icons/sliderAnimationCats/editIcon.svg';
import leftBottomCat from '../../../assets/icons/sliderAnimationCats/left-bottom-cat.svg';
import leftDog from '../../../assets/icons/sliderAnimationCats/left-dog.svg';
import leftTopCat from '../../../assets/icons/sliderAnimationCats/left-top-cat.svg';
// import middleHeart from '../../../assets/icons/sliderAnimationCats/middleHeart.svg';
import rightBottomCat from '../../../assets/icons/sliderAnimationCats/right-bottom-cat.svg';
import rightCat from '../../../assets/icons/sliderAnimationCats/right-cat.svg';
import rightTopCat from '../../../assets/icons/sliderAnimationCats/right-top-cat.svg';
// import smallestHeart from '../../../assets/icons/sliderAnimationCats/smallestHeart.svg';

import { BaseButton } from '../../index';

const SliderAnimation = () => {
  const [platesCount, setPlatesCount] = useState(25);
  const [petsCount, setPetsCount] = useState(21);
  const [donation, setDonation] = useState(3750);
  const [isChange, setIsChange] = useState(false);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPlatesCount(Math.floor(donation / 150));
  }, [donation]);

  const changeEnding = (num: number, word: string) => {
    const numStr = num.toString();
    if (numStr[numStr.length - 1] === '1' && numStr[numStr.length - 2] !== '1') {
      return word;
    } else if (numStr[numStr.length - 1].match(/[234]/) && numStr[numStr.length - 2] !== '1') return word + 's';
    else {
      return word + 'sMore';
    }
  };

  const validateInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /\D/g;
    // console.log(ev.target.value);
    const value = Number(ev.target.value.replace(regex, ''));
    // if (!(value % 150 === 0)) {
    //   Math.floor(value / 150)
    // } else {
    setDonation(value);
    // }
  };

  const onEditClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    setIsChange(true);
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={s.sliderAnimation}>
      <h2 className={s.sliderAnimation__title}>
        {petsCount} {t(`sliderAnimation.${changeEnding(petsCount, 'pet')}`)} {t('sliderAnimation.title')}
      </h2>
      <p className={s.sliderAnimation__desc}>{t('sliderAnimation.content')}</p>
      <div className={s.sliderAnimation__img_container}>
        <img className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftTopCat}`} src={leftTopCat} alt="cat" />
        <img className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftBottomCat}`} src={leftBottomCat} alt="cat" />
        <img className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftDog}`} src={leftDog} alt="dog" />
        <img className={`${s.sliderAnimation__img} ${s.sliderAnimation_centerCat}`} src={centerCat} alt="cat" />
        <img className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightCat}`} src={rightCat} alt="cat" />
        <img className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightTopCat}`} src={rightTopCat} alt="cat" />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightBottomCat}`}
          src={rightBottomCat}
          alt="cat"
        />
      </div>
      <p className={s.sliderAnimation__plates}>
        {platesCount} {t(`sliderAnimation.${changeEnding(platesCount, 'plate')}`)}
      </p>
      <div className={s.sliderAnimation__donation}>
        <input
          ref={inputRef}
          disabled={!isChange}
          type="text"
          placeholder={donation.toString()}
          onChange={validateInput}
        />
        <span>₸</span>
        <button className={s.sliderAnimation__edit} onClick={onEditClick}>
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      <div className={s.sliderAnimation__bar}>
        <label className={s.sliderAnimation__label} htmlFor="barInput">
          {donation} {t('sliderAnimation.price')}
          <input
            id="barInput"
            className={s.sliderAnimation__barInput}
            type="range"
            step="150"
            min="0"
            max="9000"
            value={donation}
            onChange={(ev) => setDonation(Number(ev.target.value))}
          />
        </label>
        <p className={s.sliderAnimation__platesBar}>
          {platesCount} {t(`sliderAnimation.${changeEnding(platesCount, 'plate')}`)}
        </p>
      </div>
      <BaseButton variant="filled" color="primary">
        {t('sliderAnimation.btn')}
      </BaseButton>
    </div>
  );
};

export default SliderAnimation;
