import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

import mouse from '../../assets/images/404/Mouse.jpg';
import BaseButton from '../../components/ui/BaseButton/index';

export const NoMatch = () => {
  const { t } = useTranslation();
  const reset = () => {
    console.log('reset');
  };

  return (
    <div className={s.noMatch}>
      <div className={s.noMatch__container}>
        <img className={s.noMatch__container__img} src={mouse} alt="Мышка в норке" />
        <p className={s.noMatch__container__title}>{t('noMatch.title')}</p>
        <div className={s.noMatch__container__content}>
          <div className={s.noMatch__container__content__content}>
            {t('noMatch.content')}
            <span className={s.noMatch__underline}>{'каталоге'}</span>
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
