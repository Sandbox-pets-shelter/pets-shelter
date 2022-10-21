import Instagram from '../../assets/icons/footer/Instagram.svg'
import Youtube from '../../assets/icons/footer/Youtube.svg'
import Twitter from '../../assets/icons/footer/Twitter.svg'

import Mail from '../../assets/icons/footer/Mail.svg'
import Telegram from '../../assets/icons/footer/Telegram.svg'
import Facebook from '../../assets/icons/footer/Facebook.svg'
import Vk from '../../assets/icons/footer/VK.svg'

import Mastercard from '../../assets/icons/footer/Mastercard.svg'
import Visa from '../../assets/icons/footer/Visa.svg'
import Paypal from '../../assets/icons/footer/Paypal.svg'
import Webmoney from '../../assets/icons/footer/Webmoney.svg'
import Yandex from '../../assets/icons/footer/Yandex.svg'


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
    class: 'main',
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
    class: 'contacts',
    custom: true,
    modificator: true,
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
    class: 'collab',
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
    class: 'payment',
    modificator: true,
    subtitleLinks: [
      {
        id: 1,
        src: Mastercard
      },
      {
        id: 2,
        src: Visa
      },
      {
        id: 3,
        src: Paypal
      },
      {
        id: 4,
        src: Webmoney
      },
      {
        id: 5,
        src: Yandex
      }
    ]
  }
]

export const rulesLinks = [
  {
    id: 1,
    text: '© 2022 helppet. Все права защищены.'
  },
  {
    id: 2,
    text: 'Политика конфиденциальности'
  },
  {
    id: 3,
    text: 'Пользовательское соглашение'
  }
]