import Sleepingcat from 'assets/icons/stories/Sleepingcat.svg';
import { stories } from 'mocks/stories'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchStories } from 'store/petsStore/actions';
import { selectStories } from 'store/petsStore/selectors';
import { IPetStore } from 'store/petsStore/types';
import { ActionsType } from 'store/petsStore/types';

import s from './styles.module.scss';

import { Story } from '../../story'

const Stories = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch<ThunkDispatch<IPetStore, {}, ActionsType>>()
  const stories = useSelector(selectStories)

  useEffect(() => {
    dispatch(fetchStories(currentPage))
  }, [dispatch, currentPage])

  const { t } = useTranslation();

  let storiesCards = stories?.map((story, i: number) => {

    return (
      <Story key={i} story={story} />
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
