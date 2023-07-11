import { IPetPhoto } from 'types/IPet';

import style from './styles.module.scss';

export const Dots = ({ slides, currentIndex }: { slides: IPetPhoto[]; currentIndex: number }) => {
  return (
    <div>
      <div className={style.container}>
        {slides.map((slide: IPetPhoto, ind: number) => (
          <div key={ind}>
            {currentIndex === ind ? <div className={style.dot_active}></div> : <div className={style.dot}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};
