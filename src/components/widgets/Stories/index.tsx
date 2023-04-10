import EyeIcon from 'assets/icons/Eye';
import IncreaseIcon from 'assets/icons/Increase';
// import ShareIcon from 'assets/icons/Share';
import Sleepingcat from 'assets/icons/stories/Sleepingcat.svg';
import { Popup } from 'components/popup';
// import { handleShareButton } from 'components/sharebtn';
import { ImageSliderTwo } from 'components/sliderTwo';
import Share from 'components/ui/Share';
import { stories } from 'mocks/stories';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import s from './styles.module.scss';

const Stories = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  let storiesCards = stories.map((item) => {
    const goToPrevious = () => {
      // console.log(key)

      const isFirstSlide = currentIndex === 0;
      // console.log(stories.filter(item => item.key === key).map(story => story.src).length)
      const newIndex = isFirstSlide ? item.src.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const goToNext = (key: any) => {
      const isLastSlide = currentIndex === item.src.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    return (
      <div key={item.key}>
        {isOpen && (
          <Popup
            slides={item.src}
            currentIndex={currentIndex}
            handleClose={togglePopup}
            goToNext={goToNext}
            goToPrevious={goToPrevious}
            togglePopup={togglePopup}
          />
        )}
        <div className={s.stories__subcontainer}>
          <ImageSliderTwo
            isOpen={isOpen}
            currentIndex={currentIndex}
            togglePopup={togglePopup}
            slides={item.src}
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
          <div className={s.stories__subcontainer__info}>
            <div className={s.stories__subcontainer__views}>
              <div className={s.stories__subcontainer__views__date}>{item.date}</div>
              <div className={s.stories__subcontainer__views__look}>
                <EyeIcon className={s.stories__subcontainer__views__look__img} />
                {item.views}
              </div>
              <div className={s.stories__subcontainer__views__share}>
                {/* {item.share} */}
                <Share link={window.location.href} />
                {/* {styles.share} */}
              </div>
            </div>
            <div className={s.stories__subcontainer__title}>{item.title}</div>
            <div className={s.stories__subcontainer__content}>{item.content}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        Главная<div className="arrow right"></div>История спасения
      </div>
      <div className={s.stories}>
        <div className={s.stories__main__container}>
          <div className={s.stories__img__container}>
            <img className={s.stories__img} src={Sleepingcat} alt="Спящий кот" />
          </div>
          <div className={s.stories__title__container}>
            <p className={s.stories__title}>{t('stories.main_title')}</p>
            <p className={s.stories__content}>{t('stories.main_content')}</p>
          </div>
        </div>
      </div>
      {storiesCards}
    </>
  );
};
export default Stories;
