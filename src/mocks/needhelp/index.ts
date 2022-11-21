import Volunteer from '../../assets/icons/needhelp/volunteer.svg'
import Carring from '../../assets/icons/needhelp/carrying.svg'
import Feed from '../../assets/icons/needhelp/feed.svg'

import i18n from '../../i18n'

export const iconsNeedHelp = [
    {
      id: 1,
      src: Volunteer,
      alt: i18n.t('Volunteer'),
      subtitle: 'Стать волонтёром',
      content: 'Вы можете покормить, погулять или поиграть с животными в приюте.',
      link: 'Узнать подробнее'
    },
    {
      id: 2,
      src: Carring,
      alt: i18n.t('Carring'),
      subtitle: 'Приютить на время',
      content: 'В приютах не хватает мест и мы нуждаемся в людях!',
      link: 'Заполнить анкету'
    },
    {
      id: 3,
      src: Feed,
      alt: i18n.t('Feed'),
      subtitle: 'Подарить радость',
      content: 'Нашим подопечным будет приятно любое внимание!',
      link: 'Купить подарок'
    }
  ]