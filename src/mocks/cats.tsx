import {v4 as myNewId} from 'uuid'

export let cats = [
    {
        key: myNewId(),
        name: 'Стёпа',
        age: '2 года',
        descr: 'Очень дружелюбный кот, активный, бегает по всей квартире в 3 часа ночи',
        liked: true,
        src: [
            {
                image: require('../assets/images/bg.jpg')
            },
            {
                image: require('../assets/images/bg(1).jpg')
            },
            {
                image: require('../assets/images/bg(2).jpg')
            }
        ]
    },
    {
        key: myNewId(),
        name: 'Жучок',
        age: '1,5 года',
        descr: 'Будит в раннее утро, просит кушать, ест каждые 2 часа.',
        liked: false,
        src: [
            {
                image: require('../assets/images/bg.jpg')
            },
            {
                image: require('../assets/images/bg(1).jpg')
            },
            {
                image: require('../assets/images/bg(2).jpg')
            }
        ]
    },
    {
        key: myNewId(),
        name: 'Кнопик',
        age: '2 месяца',
        descr: 'Крикун, темпераментный кот, любит много поесть, особенно ночью',
        liked: true,
        src: [
            {
                image: require('../assets/images/bg.jpg')
            },
            {
                image: require('../assets/images/bg(1).jpg')
            },
            {
                image: require('../assets/images/bg(2).jpg')
            }
        ]
    }
]