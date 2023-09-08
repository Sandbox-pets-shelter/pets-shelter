import petSearch from 'assets/icons/petSearch/petSearch.svg';
import { BaseButton } from 'components';

import s from './styles.module.scss';

export const PetSearch = () => {
  return (
    <div className={s.search}>
      <img className={s.search__img} src={petSearch} alt="Поиск питомца" />
      <p className={s.search__title}>Не нашли питомца на сайте?</p>
      <p className={s.search__subtitle}>
        Заполните анкету для подбора питомца, и мы обязательно подберём вам друга среди более 8 000 обитателей приютов
      </p>
      <BaseButton variant="filled" color="primary">
        Заполнить анкету
      </BaseButton>
    </div>
  );
};
