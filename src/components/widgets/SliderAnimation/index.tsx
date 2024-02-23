import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

import { validateInputWithNumbers } from '../../../assets/helpers/validators';
import like from '../../../assets/icons/like.svg';
import biggestHeart from '../../../assets/icons/sliderAnimationCats/biggestHeart.svg';
import centerCat from '../../../assets/icons/sliderAnimationCats/center-cat.svg';
import editIcon from '../../../assets/icons/sliderAnimationCats/editIcon.svg';
import leftBottomCat from '../../../assets/icons/sliderAnimationCats/left-bottom-cat.svg';
import leftBottomDownDog from '../../../assets/icons/sliderAnimationCats/left-bottomdown-dog.svg';
import leftDog from '../../../assets/icons/sliderAnimationCats/left-dog.svg';
import leftLittleCat from '../../../assets/icons/sliderAnimationCats/left-little-cat.svg';
import leftTopCat from '../../../assets/icons/sliderAnimationCats/left-top-cat.svg';
import leftestDog from '../../../assets/icons/sliderAnimationCats/leftest-dog.svg';
import middleHeart from '../../../assets/icons/sliderAnimationCats/middleHeart.svg';
import rightBottomCat from '../../../assets/icons/sliderAnimationCats/right-bottom-cat.svg';
import rightBottomdownCat from '../../../assets/icons/sliderAnimationCats/right-bottomdown-cat.svg';
import rightCat from '../../../assets/icons/sliderAnimationCats/right-cat.svg';
import rightLittleCat from '../../../assets/icons/sliderAnimationCats/right-little-cat.svg';
import rightTopCat from '../../../assets/icons/sliderAnimationCats/right-top-cat.svg';
import rightestDog from '../../../assets/icons/sliderAnimationCats/rightest-dog.svg';
import smallestHeart from '../../../assets/icons/sliderAnimationCats/smallestHeart.svg';

import { BaseButton } from '../../index';

const SliderAnimation = () => {
  const MAX_DONATION = 9000;
  const ONE_PLATE_PRICE = 150;
  const [count, setCount] = useState(22);
  const [donation, setDonation] = useState(3300);
  const [isChange, setIsChange] = useState(false);
  const [isMouseUp, setIsMouseUp] = useState(false);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const width = {
    width: `calc(${(donation * 100) / MAX_DONATION}% + 32px)`
  };

  const percentage = Math.round((donation * 100) / MAX_DONATION);
  useEffect(() => {
    if (percentage === 100) {
      setIsChange(true);
    }
  }, [percentage]);

  useEffect(() => {
    setCount(Math.floor(donation / ONE_PLATE_PRICE));
  }, [donation]);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [isChange]);

  const changeEnding = (num: number, word: string) => {
    const numStr = num.toString();
    if (numStr[numStr.length - 1] === '1' && numStr[numStr.length - 2] !== '1') {
      return word;
    } else if (numStr[numStr.length - 1].match(/[234]/) && numStr[numStr.length - 2] !== '1') return word + 's';
    else {
      return word + 'sMore';
    }
  };

  const onEditClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    setIsChange(true);
  };

  return (
    <div className={s.sliderAnimation}>
      <h2 className={s.sliderAnimation__title}>
        {count} {t(`sliderAnimation.${changeEnding(count, 'pet')}`)} {t('sliderAnimation.title')}
      </h2>
      <p className={s.sliderAnimation__desc}>{t('sliderAnimation.content')}</p>
      <div className={s.sliderAnimation__img_container}>
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftBottomDownDog} ${
            percentage > 50 ? s.active : ''
          }`}
          src={leftBottomDownDog}
          alt="dog"
        />
        <img
          className={`${s.sliderAnimation__img}  ${s.sliderAnimation_leftestDog} ${percentage > 40 ? s.active : ''}`}
          src={leftestDog}
          alt="dog"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftBottomCat} ${percentage > 30 ? s.active : ''}`}
          src={leftBottomCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img}  ${s.sliderAnimation_leftTopCat} ${percentage > 10 ? s.active : ''}`}
          src={leftTopCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftDog} ${count > 2 ? s.active : ''}`}
          src={leftDog}
          alt="dog"
        />

        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_centerCat} ${s.active}`}
          src={centerCat}
          alt="cat"
        />

        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightCat} ${count > 1 ? s.active : ''}`}
          src={rightCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightTopCat} ${percentage > 15 ? s.active : ''}`}
          src={rightTopCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightBottomCat} ${percentage > 35 ? s.active : ''}`}
          src={rightBottomCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightestDog} ${percentage > 45 ? s.active : ''}`}
          src={rightestDog}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightBottomDownCat} ${
            percentage > 55 ? s.active : ''
          }`}
          src={rightBottomdownCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftLittleCat}  ${percentage > 70 ? s.active : ''}`}
          src={leftLittleCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightLittleCat} ${percentage > 90 ? s.active : ''}`}
          src={rightLittleCat}
          alt="cat"
        />
        <p className={s.sliderAnimation__plates}>
          {count} {t(`sliderAnimation.${changeEnding(count, 'plate')}`)}
        </p>
      </div>
      <div className={s.sliderAnimation__donation}>
        <input
          ref={inputRef}
          disabled={!isChange}
          onBlur={() => setIsChange(false)}
          type="text"
          placeholder={donation.toString()}
          value={donation}
          onChange={(ev) => setDonation(validateInputWithNumbers(ev))}
        />
        <span>₸</span>
        <button className={s.sliderAnimation__edit} onClick={onEditClick}>
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      <div className={s.sliderAnimation__slider}>
        <div className={s.sliderAnimation__barContainer}>
          <input
            type="range"
            max={MAX_DONATION}
            min="150"
            value={donation}
            step={150}
            onChange={(ev) => setDonation(Number(ev.target.value))}
            onMouseDown={() => setIsMouseUp(false)}
            onMouseUp={() => setIsMouseUp(true)}
          />
          <div className={s.sliderAnimation__barProgress} style={width}>
            <img className={s.sliderAnimation__thumb} src={like} alt="like icon" />
            <img
              className={`${s.sliderAnimation__heart} ${s.sliderAnimation__biggestHeart} ${isMouseUp ? s.heart : ''}`}
              src={biggestHeart}
              alt="heart"
            />
            <img
              className={`${s.sliderAnimation__heart} ${s.sliderAnimation__middleHeart} ${isMouseUp ? s.heart : ''}`}
              src={middleHeart}
              alt="heart"
            />
            <img
              className={`${s.sliderAnimation__heart} ${s.sliderAnimation__smallestHeart} ${isMouseUp ? s.heart : ''}`}
              src={smallestHeart}
              alt="heart"
            />
          </div>
        </div>
      </div>
      <BaseButton variant="filled" color="primary">
        {t('sliderAnimation.btn')}
      </BaseButton>
    </div>
  );
};

export default SliderAnimation;
