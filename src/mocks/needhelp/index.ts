import Carring from '../../assets/icons/needhelp/carrying.svg';
import Feed from '../../assets/icons/needhelp/feed.svg';
import Volunteer from '../../assets/icons/needhelp/volunteer.svg';

import i18n from '../../i18n';

export const itemsNeedHelp = [
  {
    id: 1,
    src: Volunteer,
    alt: i18n.t('needhelp.volunteer'),
    subtitle: i18n.t('needhelp.volunteer.subtitle'),
    content: i18n.t('needhelp.volunteer.content'),
    link: i18n.t('needhelp.volunteer.btn_text')
  },
  {
    id: 2,
    src: Carring,
    alt: i18n.t('needhelp.carring'),
    subtitle: i18n.t('needhelp.carring.subtitle'),
    content: i18n.t('needhelp.carring.content'),
    link: i18n.t('needhelp.carring.btn_text')
  },
  {
    id: 3,
    src: Feed,
    alt: i18n.t('needhelp.feed'),
    subtitle: i18n.t('needhelp.feed.subtitle'),
    content: i18n.t('needhelp.feed.content'),
    link: i18n.t('needhelp.feed.btn_text')
  }
];
