import EyeIcon from 'assets/icons/Eye'

import ShareIcon from 'assets/icons/Share'

import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { IStory } from 'types/IStory'

import s from './styles.module.scss'

import { Popup } from '../popup'

import { handleShareButton } from '../sharebtn'

import { ImageSliderTwo } from '../sliderStory'

export const Story = ({ story }: {story: IStory}) => {
    const t = useTranslation()
    const [ toggled, setToggled ] = useState(false)

    const [ currentIndex, setCurrentIndex ] = useState(0)
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? story.link.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === story.link.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (ind: number) => {
      setCurrentIndex(ind);
    };

    return (
        <div key={story.name}>
        {toggled && <Popup
          currentIndex={currentIndex}
          slides={story.link}
          handleClose={() => setToggled(false)}
        />}
        <div className={s.stories__subcontainer}>
          <ImageSliderTwo
              currentIndex={currentIndex}
              togglePopup={() => setToggled(true)}
              slides={story.link}
              goToNext={goToNext}
              goToPrevious={goToPrevious}
              goToSlide={goToSlide}
          />
          <div className={s.stories__subcontainer__info}>
            <div className={s.stories__subcontainer__views}>
              <div className={s.stories__subcontainer__views__date}>{story.date}</div>
              <div className={s.stories__subcontainer__views__look}>
                <EyeIcon className={s.stories__subcontainer__views__look__img}/>{story.view}</div>
              <div className={s.stories__subcontainer__views__share} onClick={handleShareButton}>
                t{'stories.one.share'}
                <ShareIcon className={s.stories__subcontainer__views__share__img}/>{s.share}
              </div>
          </div>
            <div className={s.stories__subcontainer__title}>{story.name}</div>
            <div className={s.stories__subcontainer__content}>{story.text}</div>
          </div>
        </div>
      </div>
    )
}