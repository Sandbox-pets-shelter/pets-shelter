import s from './styles.module.scss'

import { Card } from '../../components/card'

import { Filters } from '../../components/index'

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
