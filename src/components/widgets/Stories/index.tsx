import Sleepingcat from 'assets/icons/stories/Sleepingcat.svg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchStoriesData } from 'store/petsStore/actions';
import { selectStories, selectStoriesCurrentPage, selectStoriesTotalPages } from 'store/petsStore/selectors';
import { IPetStore } from 'store/petsStore/types';
import { ActionsType } from 'store/petsStore/types';

import s from './styles.module.scss';

import { Story } from '../../story';

const Stories = () => {
  const currentPage = useSelector(selectStoriesCurrentPage);
  const totalPage = useSelector(selectStoriesTotalPages);
  const dispatch = useDispatch<ThunkDispatch<IPetStore, {}, ActionsType>>();
  const stories = useSelector(selectStories);

  useEffect(() => {
    dispatch(fetchStoriesData(currentPage));
  }, [currentPage]);

  const { t } = useTranslation();

  let storiesCards = stories?.map((story, i: number) => {
    return <Story key={i} story={story} />;
  });
  return (
    <>
      <div className={s.navigation}>
        Главная<div className="arrow right"></div>
        <b>Счастливые истории</b>
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
