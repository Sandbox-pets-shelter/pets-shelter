import homelessPet from 'assets/icons/homelessPet/HomelessPet.svg';
import { BaseButton } from 'components';
import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

const HomelessPet = () => {
  const { t } = useTranslation();

  const reset = () => {
    console.log('reset');
  };
  return (
    <div className={s.homelesspet}>
      <img className={s.homelesspet__img} src={homelessPet} alt="Бездомный питомец" />
      <p className={s.homelesspet__title}>{t('homelesspet.title')}</p>
      <p className={s.homelesspet__subtitle}>{t('homelesspet.subtitle')}</p>
      <BaseButton variant="filled" color="primary" click={reset}>
        {t('homelesspet.btn')}
      </BaseButton>
    </div>
  );
};

export default HomelessPet;
