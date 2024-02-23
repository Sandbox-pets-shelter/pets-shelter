import homelessPet from 'assets/icons/homelessPet/HomelessPet.svg';
import { BaseButton } from 'components';
import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { showModalAction } from 'store/modalStore/actions';
import { ModalWindows } from 'store/modalStore/reducers';

import s from './styles.module.scss';

const HomelessPet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const showFindPetForm = () => dispatch(showModalAction(ModalWindows.FIND_PET_FORM));

  return (
    <div className={s.homelesspet}>
      <img className={s.homelesspet__img} src={homelessPet} alt="Бездомный питомец" />
      <p className={s.homelesspet__title}>{t('homelesspet.title')}</p>
      <p className={s.homelesspet__subtitle}>{t('homelesspet.subtitle')}</p>
      <BaseButton variant="filled" color="primary" click={showFindPetForm}>
        {t('homelesspet.btn')}
      </BaseButton>
    </div>
  );
};

export default HomelessPet;
