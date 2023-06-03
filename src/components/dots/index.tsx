import style from './styles.module.scss';

export const Dots = ({ slides, currentIndex }: {slides: string[], currentIndex: number}) => {

  return (
    <div>
      <div className={style.container}>
        {slides.map((slide: string, ind: number) => (
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
