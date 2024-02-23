import mouseMobile from 'assets/images/404/404-phone.svg';
import mouseTablet from 'assets/images/404/404-tablet.svg';
import mouse from 'assets/images/404/404.svg';
import BaseButton from 'components/ui/BaseButton/index';
import { useGetWindowDimensions } from 'hooks/useGetWindowDimensions';
import { useTranslation } from 'react-i18next';
import { redirect } from 'react-router-dom';

import s from './styles.module.scss';

export const NoMatch = () => {
  const { t } = useTranslation();
  const reset = () => {
    history.length === 0 ? redirect('/') : history.back();
  };

  const { width } = useGetWindowDimensions();
  const desktop = 1024;
  const tablet = 450;

  return (
    <div className={s.noMatch}>
      <img className={s.noMatch__img} src={width > desktop ? mouse : width > tablet ? mouseTablet : mouseMobile} alt="Мышка в норке" />
      <div className={s.noMatch__container}>
        <p className={s.noMatch__container__title}>{t('noMatch.title')}</p>
        <div className={s.noMatch__container__content}>
          <div className={s.noMatch__container__content__content}>
            {t('noMatch.content')}
            <a href="/pets" className={s.noMatch__underline}>{'каталоге'}</a>
          </div>
          <div className={s.noMatch__container__content__button}>
            <BaseButton variant="filled" color="primary" click={reset}>
              {t('noMatch.btn')}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};
