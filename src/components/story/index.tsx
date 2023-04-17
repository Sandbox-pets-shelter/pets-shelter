import { useState } from 'react'

import s from './styles.module.scss'

import EyeIcon from '../../assets/icons/Eye'

import ShareIcon from '../../assets/icons/Share'

import { IStory } from '../../types/IStory'

import { Popup } from '../popup'

import { handleShareButton } from '../sharebtn'

import { ImageSliderTwo } from '../sliderTwo'

export const Story = ({ story }: {story: IStory}) => {

    const [ toggled, setToggled ] = useState(false)

    const [ currentIndex, setCurrentIndex ] = useState(0)
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? story.src.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = (key: any) => {
        const isLastSlide = currentIndex === story.src.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div key={story.key}>
        {toggled && <Popup
          currentIndex={currentIndex}
          slides={story.src}
          handleClose={() => setToggled(false)}
        />}
        <div className={s.stories__subcontainer}>
          <ImageSliderTwo
              currentIndex={currentIndex}
              togglePopup={() => setToggled(true)}
              slides={story.src}
              goToNext={goToNext}
              goToPrevious={goToPrevious}
          />
          <div className={s.stories__subcontainer__info}>
            <div className={s.stories__subcontainer__views}>
              <div className={s.stories__subcontainer__views__date}>{story.date}</div>
              <div className={s.stories__subcontainer__views__look}>
                <EyeIcon className={s.stories__subcontainer__views__look__img}/>{story.views}</div>
              <div className={s.stories__subcontainer__views__share} onClick={handleShareButton}>
                {story.share}
                <ShareIcon className={s.stories__subcontainer__views__share__img}/>{s.share}
              </div>
          </div>
            <div className={s.stories__subcontainer__title}>{story.title}</div>
            <div className={s.stories__subcontainer__content}>{story.content}</div>
          </div>
        </div>
      </div>
    )
}