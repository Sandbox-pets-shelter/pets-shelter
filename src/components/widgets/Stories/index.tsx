import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { stories } from '../../../mocks/stories'
import { ImageSliderTwo } from '../../sliderTwo'
import { Link } from 'react-router-dom'
import { handleShareButton } from '../../sharebtn'
import IncreaseIcon from '../../../assets/icons/Increase'
import EyeIcon from '../../../assets/icons/Eye'
import ShareIcon from '../../../assets/icons/Share'
import { Popup } from '../../popup'
import { createContext, useContext } from 'react'
import { Story } from '../../story_comp'
import s from './styles.module.scss';
import Sleepingcat from '../../../assets/icons/stories/Sleepingcat.svg';

const Stories = () => {
  const { t } = useTranslation();

  let storiesCards = stories.map((story, i:number) => {

    return (
      <Story key={story.key} story={story}/>
    )
  })

  return (
    <>
      <div>
        Главная<div className="arrow right"></div>История спасения
      </div>
      <div className={s.stories}>
        <div className={s.stories__main__container}>
          <div className={s.stories__img__container}>
            <img className={s.stories__img} src={Sleepingcat} alt="Спящий кот" />
          </div>
          <div className={s.stories__title__container}>
            <p className={s.stories__title}>{t('stories.main_title')}</p>
            <p className={s.stories__content}>{t('stories.main_content')}</p>
          </div>
        </div>
      </div>
      {storiesCards}
    </>
  );
};
export default Stories;
