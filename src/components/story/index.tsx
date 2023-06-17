import EyeIcon from 'assets/icons/Eye';
import Share from 'components/ui/Share';
import { useState } from 'react';
import { IStory } from 'types/IStory';

import s from './styles.module.scss';

import { Popup } from '../popup';
import { ImageSliderTwo } from '../sliderStory';

export const Story = ({ story }: { story: IStory }) => {
  const [toggled, setToggled] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? story.photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === story.photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (ind: number) => {
    setCurrentIndex(ind);
  };

  return (
    <div key={story.name}>
      {toggled && <Popup currentIndex={currentIndex} slides={story.photos} handleClose={() => setToggled(false)} />}
      <div className={s.stories__subcontainer}>
        <ImageSliderTwo
          currentIndex={currentIndex}
          togglePopup={() => setToggled(true)}
          slides={story.photos}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        />
        <div className={s.stories__subcontainer__info}>
          <nav className={s.stories__subcontainer__views}>
            <div className={s.stories__subcontainer__views__date}>{story.date}</div>
            <div className={s.stories__subcontainer__views__look}>
              <EyeIcon className={s.stories__subcontainer__views__look__img} />
              {story.view}
            </div>
            <button className={s.stories__subcontainer__views__share}>
              <Share link={`${window.location.href}/${story.id}`} btn="share" />
            </button>
          </nav>
          <h2 className={s.stories__subcontainer__title}>{story.name}</h2>
          <p className={s.stories__subcontainer__content}>{story.text}</p>
        </div>
      </div>
    </div>
  );
};
