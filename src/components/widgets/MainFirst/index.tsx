import arrowdown from 'assets/icons/mainfirst/Arrowdown.svg';
import blackcatgirl from 'assets/icons/mainfirst/BlackCatGirl.png';
import catheart from 'assets/icons/mainfirst/catheart.png';
import plus from 'assets/icons/mainfirst/plus.svg';
import redplus from 'assets/icons/mainfirst/redplus.svg';
import { BaseButton } from 'components';
import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { showModalAction } from 'store/modalStore/actions';
import { ModalWindows } from 'store/modalStore/reducers';

import s from './styles.module.scss';

const MainFirst = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const showGiveAwayPetForm = () => dispatch(showModalAction(ModalWindows.GIVE_AWAY_PET_FORM));
  const showTakePetHomeForm = () => dispatch(showModalAction(ModalWindows.TAKE_PET_HOME_FORM));

  return (
    <div className={s.mainfirst}>
      <div className={s.mainfirst__first}>
        <div className={s.mainfirst__first__container}>
          <p className={s.mainfirst__first__container__title}>{t('mainfirst.first.title')}</p>
          <p className={s.mainfirst__first__container__content}>{t('mainfirst.first.content')}</p>
          <div className={s.mainfirst__first__container__btn}>
            <BaseButton variant="filled" color="primary" click={showGiveAwayPetForm}>
              {t('mainfirst.first.btn')}
            </BaseButton>
          </div>
          <div className={s.mainfirst__first__container__arrow}>
            <a href="#">
              <img src={arrowdown} alt="Стрелка вниз" />
            </a>
          </div>
        </div>
        <div className={s.mainfirst__first__img}>
          <img src={blackcatgirl} alt="Черный кот с девушкой" />
        </div>
      </div>
      <div className={s.mainfirst__urgenthelp}>
        <div className={s.mainfirst__urgenthelp__container}>
          <p className={s.mainfirst__urgenthelp__container__subtitle}>
            {window.innerWidth > 767 ? t('mainfirst.urgenthelp.subtitle') : t('mainfirst.urgenthelp.subtitle_adaptive')}
          </p>

          <p className={s.mainfirst__urgenthelp__container__content}>{t('mainfirst.urgenthelp.content')}</p>
        </div>
        <BaseButton variant="filled" color="accent" endIcon={plus} click={showTakePetHomeForm}>
          {t('mainfirst.urgenthelp.btn')}
        </BaseButton>
        <div className={s.mainfirst__urgenthelp__box}>
          <img className={s.mainfirst__urgenthelp__box__img} src={catheart} alt="Кот с сердцем" />
        </div>
      </div>
    </div>
  );
};

export default MainFirst;
