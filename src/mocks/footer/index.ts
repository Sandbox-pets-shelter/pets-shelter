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

import i18n from '../../i18n'


export const iconsFooter = [
  {
    id: 1,
    src: Instagram,
    alt: i18n.t('alt.instagram')
  },
  {
    id: 2,
    src: Youtube,
    alt: i18n.t('alt.youtube')
  },
  {
    id: 3,
    src: Twitter,
    alt: i18n.t('alt.twitter')
  }
]

export const footerTextRight = [
  {
    id: 1,
    class: 'main',
    title: i18n.t('footer.text_right.main'),
    subtitleLinks: [
      {
        id: 1,
        text: i18n.t('footer.text_right.help_us')
      },
      {
        id: 2,
        text: i18n.t('footer.text_right.pets')
      },
      {
        id: 3,
        text: i18n.t('footer.text_right.history')
      },
      {
        id: 4,
        text: i18n.t('footer.text_right.about')
      },
      {
        id: 5,
        text: i18n.t('footer.text_right.reports')
      },
      {
        id: 6,
        text: i18n.t('footer.text_right.requisites')
      },
      {
        id: 7,
        text: i18n.t('footer.text_right.vacancy')
      },
      {
        id: 8,
        text: i18n.t('footer.text_right.mass_media')
      }
    ]
  },
  {
    id: 2,
    title: i18n.t('footer.text_right.contacts'),
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
    title: i18n.t('footer.text_right.cooperation'),
    class: 'collab',
    subtitleLinks: [
      {
        id: 1,
        text: i18n.t('footer.text_right.volunteers')
      },
      {
        id: 2,
        text: i18n.t('footer.text_right.clinics')
      },
      {
        id: 3,
        text: i18n.t('footer.text_right.shelters')
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
    text: i18n.t('footer.links.rules')
  },
  {
    id: 2,
    text: i18n.t('footer.links.privacy')
  },
  {
    id: 3,
    text: i18n.t('footer.links.agreement')
  }
]