import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

// import biggestHeart from '../../../assets/icons/sliderAnimationCats/biggestHeart.svg';
import centerCat from '../../../assets/icons/sliderAnimationCats/center-cat.svg';
import editIcon from '../../../assets/icons/sliderAnimationCats/editIcon.svg';
import leftBottomCat from '../../../assets/icons/sliderAnimationCats/left-bottom-cat.svg';
import leftBottomDownDog from '../../../assets/icons/sliderAnimationCats/left-bottomdown-dog.svg';
import leftDog from '../../../assets/icons/sliderAnimationCats/left-dog.svg';
import leftTopCat from '../../../assets/icons/sliderAnimationCats/left-top-cat.svg';
import leftestDog from '../../../assets/icons/sliderAnimationCats/leftest-dog.svg';
import like from '../../../assets/icons/sliderAnimationCats/like.svg';
// import middleHeart from '../../../assets/icons/sliderAnimationCats/middleHeart.svg';
import rightBottomCat from '../../../assets/icons/sliderAnimationCats/right-bottom-cat.svg';
import rightBottomdownCat from '../../../assets/icons/sliderAnimationCats/right-bottomdown-cat.svg';
import rightCat from '../../../assets/icons/sliderAnimationCats/right-cat.svg';
import rightTopCat from '../../../assets/icons/sliderAnimationCats/right-top-cat.svg';
import rightestDog from '../../../assets/icons/sliderAnimationCats/rightest-dog.svg';
// import smallestHeart from '../../../assets/icons/sliderAnimationCats/smallestHeart.svg';

import { BaseButton } from '../../index';

const SliderAnimation = () => {
  const MAX_DONATION = 9000;
  const ONE_PLATE_PRICE = 150;
  const [count, setCount] = useState(25);
  const [donation, setDonation] = useState(3750);
  const [isChange, setIsChange] = useState(false);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const width = {
    width: `calc(${(donation * 100) / MAX_DONATION}% + 32px)`
  };

  const percentage = Math.round((donation * 100) / MAX_DONATION);

  console.log(width);

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

  const validateInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /\D/g;
    const value = Number(ev.target.value.replace(regex, ''));
    setDonation(value);
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
          className={`${s.sliderAnimation__img}  ${s.sliderAnimation_leftestDog} ${count > 12 ? s.active : ''}`}
          src={leftestDog}
          alt="dog"
        />
        <img
          className={`${s.sliderAnimation__img}  ${s.sliderAnimation_leftTopCat} ${count > 30 ? s.active : ''}`}
          src={leftTopCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftBottomCat} ${count > 50 ? s.active : ''}`}
          src={leftBottomCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_leftBottomDownDog} ${count > 4 ? s.active : ''}`}
          src={leftBottomDownDog}
          alt="dog"
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
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightBottomDownCat} ${count > 50 ? s.active : ''}`}
          src={rightBottomdownCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightTopCat} ${count > 35 ? s.active : ''}`}
          src={rightTopCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightBottomCat} ${count > 55 ? s.active : ''}`}
          src={rightBottomCat}
          alt="cat"
        />
        <img
          className={`${s.sliderAnimation__img} ${s.sliderAnimation_rightestDog} ${count > 10 ? s.active : ''}`}
          src={rightestDog}
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
          type="text"
          placeholder={donation.toString()}
          onChange={validateInput}
        />
        <span>₸</span>
        <button className={s.sliderAnimation__edit} onClick={onEditClick}>
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      <div className={s.sliderAnimation__slider}>
        <p className={s.sliderAnimation__price}>
          {donation} {t('sliderAnimation.price')}
        </p>
        <div className={s.sliderAnimation__barContainer}>
          <input
            type="range"
            max={MAX_DONATION}
            min="0"
            value={donation}
            step={150}
            onChange={(ev) => setDonation(Number(ev.target.value))}
          />
          <div className={s.sliderAnimation__barProgress} style={width}>
            <img src={like} alt="like icon" />
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
