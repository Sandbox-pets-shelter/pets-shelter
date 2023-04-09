import { Card } from 'components/Card';
import { Filters } from 'components/index';

import s from './styles.module.scss';

export const Pets = () => {
  return (
    <main className={s.main}>
      <Filters />
      <div className={s.main__content}>
        <Card />
      </div>
    </main>
  );
};
