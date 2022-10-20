import Instagram from '../../assets/icons/Instagram.svg'
import Youtube from '../../assets/icons/Youtube.svg'
import Twitter from '../../assets/icons/Twitter.svg'

import Mail from '../../assets/icons/Mail.svg'
import Telegram from '../../assets/icons/Telegram.svg'
import Facebook from '../../assets/icons/Facebook.svg'
import Vk from '../../assets/icons/VK.svg'


export const iconsFooter = [
  {
    id: 1,
    src: Instagram,
    alt: 'instagram icon'
  },
  {
    id: 2,
    src: Youtube,
    alt: 'youtube icon'
  },
  {
    id: 3,
    src: Twitter,
    alt: 'twitter icon'
  }
]

export const footerTextRight = [
  {
    id: 1,
    title: 'Главная',
    subtitleLinks: [
      {
        id: 1,
        text: 'Помочь нам'
      },
      {
        id: 2,
        text: 'Питомцы'
      },
      {
        id: 3,
        text: 'История спасения'
      },
      {
        id: 4,
        text: 'О проекте'
      },
      {
        id: 5,
        text: 'Отчёты'
      },
      {
        id: 6,
        text: 'Реквезиты'
      },
      {
        id: 7,
        text: 'Вакансии'
      },
      {
        id: 8,
        text: 'Мы в СМИ'
      }
    ]
  },
  {
    id: 2,
    title: 'Контакты',
    class: 'row',
    subtitleLinks: [
      {
        id: 1,
        src: Mail
      },
      {
        id: 2,
        src: Telegram
      },
      {
        id: 3,
        src: Facebook
      },
      {
        id: 4,
        src: Vk
      }
    ]
  },
  {
    id: 3,
    title: 'Сотрудничество',
    subtitleLinks: [
      {
        id: 1,
        text: 'Волонтерам'
      },
      {
        id: 2,
        text: 'Ветклиникам'
      },
      {
        id: 3,
        text: 'Приютам'
      }
    ]
  },
  {
    id: 4,
    // title: 'Сотрудничество',
    class: 'row',
    subtitleLinks: [
      {
        id: 1,
        src: Mail
      },
      {
        id: 2,
        src: Telegram
      },
      {
        id: 3,
        src: Facebook
      }
    ]
  }
]