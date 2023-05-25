import arrowred from 'assets/icons/happystories/arrowred.svg';
import share_btn from 'assets/icons/happystories/Share_btn.svg';
import { BaseButton } from 'components';
import ArrowButton from 'components/ui/ArrowButton';
import { itemsHappyStories } from 'mocks/happystories';

import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

const HappyStories = () => {
  const { t } = useTranslation();

  const reset = () => {
    console.log('reset');
  };
  return (
    <div className={s.happystories}>
      <p className={s.happystories__title}>{t('happystories.title')}</p>
      <p className={s.happystories__content}>{t('happystories.content')}</p>
      <div className={s.happystories__container}>
        {/* {itemsHappyStories.map((item) => (
          <div key={item.id} className={s.happystories__container__item}>
            <div className={s.happystories__container__img}>
              <a className={s.happystories__container__img} href="#">
                <img className={s.happystories__container__img__share} src={share_btn} alt="Поделиться" />
              </a>
              <img src={item.src} alt={item.alt} />
              <div className={s.happystories__container__img__title}>
                <p className={s.happystories__container__img__subtitle}>{item.subtitle}</p>
                <p className={s.happystories__container__img__content}>{item.content}</p>
                <ArrowButton variant="filled" color="primary">
                  {item.link}
                </ArrowButton>
              </div>
            </div>
          </div>
        ))} */}
      </div>
      <div className={s.happystories__button}>
        <BaseButton variant="outlined" color="accent" click={reset}>
          {t('happystories.btn')}
          <img src={arrowred} alt="Стрелка красная" />
        </BaseButton>
      </div>
    </div>
  );
};

export default HappyStories;
