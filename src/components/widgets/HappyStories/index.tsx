import arrowred from 'assets/icons/happystories/arrowred.svg';
import { BaseButton } from 'components';
import ArrowButton from 'components/ui/ArrowButton';
import Share from 'components/ui/Share';
import { itemsHappyStories } from 'mocks/happystories';

import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

const HappyStories = () => {
  const { t } = useTranslation();

  const reset = () => {
    console.log('reset');
  };

  function moveSlider(ev: React.MouseEvent<HTMLDivElement>) {}
  return (
    <div className={s.happystories}>
      <h2 className={s.happystories__title}>{t('happystories.title')}</h2>
      <p className={s.happystories__content}>{t('happystories.content')}</p>
        <div className={s.happystories__slider_wrapper}>
      <div className={s.happystories__container}>
          {itemsHappyStories.map((item) => (
            <div
              key={item.id}
              className={s.happystories__container__item}
              onClick={(ev) => {
                moveSlider(ev);
              }}
            >
              <div className={s.happystories__container__img}>
                {/* кода будет страница, то указать нужную ссылку */}
                <Share link={window.location.href} btn="icon" />
                <img src={item.src} alt={item.alt} className={s.happystories__container__image} />
                <div className={s.happystories__container__img__title}>
                  <h3 className={s.happystories__container__img__subtitle}>{item.subtitle}</h3>
                  <p className={s.happystories__container__img__content}>{item.content}</p>
                  <ArrowButton variant="filled" color="primary">
                    {item.link}
                  </ArrowButton>
                </div>
              </div>
            </div>
          ))}
        </div>
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
