import arrowdown from 'assets/icons/mainfirst/Arrowdown.svg';
import blackcatgirl from 'assets/icons/mainfirst/BlackCatGirl.png';
import catheart from 'assets/icons/mainfirst/catheart.png';
import plus from 'assets/icons/mainfirst/plus.svg';
import redplus from 'assets/icons/mainfirst/redplus.svg';
import { BaseButton } from 'components';
import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

const MainFirst = () => {
  const { t } = useTranslation();

  const reset = () => {
    console.log('reset');
  };
  return (
    <div className={s.mainfirst}>
      <div className={s.mainfirst__first}>
        <div className={s.mainfirst__first__container}>
          <p className={s.mainfirst__first__container__title}>{t('mainfirst.first.title')}</p>
          <p className={s.mainfirst__first__container__content}>{t('mainfirst.first.content')}</p>
          <div className={s.mainfirst__first__container__btn}>
            <BaseButton variant="filled" color="primary" click={reset}>
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
          <p className={s.mainfirst__urgenthelp__container__content}>
            {window.innerWidth > 767 ? t('mainfirst.urgenthelp.content') : t('mainfirst.urgenthelp.content_adaptive')}
          </p>
        </div>
        <BaseButton variant="filled" color="accent" endIcon={plus} click={reset}>
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
