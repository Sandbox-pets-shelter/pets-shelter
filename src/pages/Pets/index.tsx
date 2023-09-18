import { Card } from 'components/card';
import { Filters } from 'components/index';
import { PetNotFound } from 'components/petNotFound';

import s from './styles.module.scss';

export const Pets = () => {
  return (
    <main className={s.main}>
      <Filters />
      <div className={s.main__content}>
        <Card />
        <PetNotFound />
      </div>
    </main>
  );
};
