import ArrowButton from 'components/ui/ArrowButton';
import { itemsNeedHelp } from 'mocks/needhelp';
import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

const NeedHelp = () => {
  const { t } = useTranslation();

  function moveSlider(ev: React.MouseEvent<HTMLDivElement>) {}

  return (
    <div className={s.needhelp}>
      <p className={s.needhelp__title}>{t('needhelp.main_title')}</p>
      <div className={s.needhelp__container}>
        {itemsNeedHelp.map((item) => (
          <div
            key={item.id}
            className={s.needhelp__container__item}
            onClick={(ev) => {
              moveSlider(ev);
            }}
          >
            <a className={s.needhelp__container__img} href="#">
              <img src={item.src} alt={item.alt} />
              <div className={s.needhelp__container__img__title}>
                <p className={s.needhelp__container__img__subtitle}>{item.subtitle}</p>
                <p className={s.needhelp__container__img__content}>{item.content}</p>
                <div className={s.needhelp__container__img__title__btm}>
                  <ArrowButton variant="filled" color="primary">
                    {item.link}
                  </ArrowButton>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedHelp;
