import { PetPhoto } from 'types/IPetPhoto';

import style from './styles.module.scss';

export const Dots = ({ slides, currentIndex }: {slides: PetPhoto[], currentIndex: number}) => {

  return (
    <div>
      <div className={style.container}>
        {slides.map((slide: PetPhoto, ind: number) => (
          <div key={ind}>
            {currentIndex === ind ? (
              <div className={style.dot_active}></div>
            ) : (
              <div className={style.dot}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
