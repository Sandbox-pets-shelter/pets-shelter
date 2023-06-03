import Sleepingcat from 'assets/icons/stories/Sleepingcat.svg';
import { stories } from 'mocks/stories'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'

import { IStory } from 'types/IStory';

import s from './styles.module.scss';

import { Story } from '../../story'

const Stories = () => {
  const [stories, setStories] = useState<IStory[]>()
  const { t } = useTranslation();

  let storiesCards = stories?.map((story, i:number) => {

    return (
      <Story key={story.name} story={story} />
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
