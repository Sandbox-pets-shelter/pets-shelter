import s from './styles.module.scss'
import ShareIcon from '../../assets/icons/Share.svg'
import HeartIcon from '../../assets/icons/Heart.svg'
import { ImageSlider } from '../slider'

export const Card = () => {
    let images = [
        {
            name: 'Стёпа',
            age: '2 года',
            descr: 'Очень дружелюбный кот, активный, бегает по всей квартире в 3 часа ночи',
            liked: true,
            src: [
                {
                    image: require('../../assets/images/bg.jpg')
                },
                {
                    image: require('../../assets/images/bg(1).jpg')
                },
                {
                    image: require('../../assets/images/bg(2).jpg')
                }
            ]
        },
        {
            name: 'Жучок',
            age: '1,5 года',
            descr: 'Будит в раннее утро, просит кушать, ест каждые 2 часа.',
            liked: false,
            src: [
                {
                    image: require('../../assets/images/bg.jpg')
                },
                {
                    image: require('../../assets/images/bg(1).jpg')
                },
                {
                    image: require('../../assets/images/bg(2).jpg')
                }
            ]
        },
        {
            name: 'Кнопик',
            age: '2 месяца',
            descr: 'Крикун, темпераментный кот, любит много поесть, особенно ночью',
            liked: true,
            src: [
                {
                    image: require('../../assets/images/bg.jpg')
                },
                {
                    image: require('../../assets/images/bg(1).jpg')
                },
                {
                    image: require('../../assets/images/bg(2).jpg')
                }
            ]
        }
    ]
    console.log(images.map(img => img.src.map(el => el.image)))
  return (
    <div className={s.card__section}>
        {images.map(img => (
            <div key={img.name} className={s.card}>
                {/* {img.src.map(el => ( */}
                    <ImageSlider slides={img.src} className={s.card__img}/>
                {/* ))} */}
                <div className={s.card__title}>{img.name},{img.age}</div>
                <div className={s.card__descr}>{img.descr}</div>
                <img src={HeartIcon} alt="like" className={s.card__like}/>
                <img src={ShareIcon} alt="share" className={s.card__share}/>
            </div>
        ))}
    </div>
  )
}