import { useTranslation } from 'react-i18next'
import { itemsNeedHelp } from '../../../mocks/needhelp'
import Arrow from '../../../assets/icons/needhelp/arrow'
import ArrowButton from '../../ui/ArrowButton'

import styles from './styles.module.scss'

const Actions = () => {

  const { t } = useTranslation()

  return (
    <div>
        <p className={styles.title}>Если у вас нет возможности забрать питомца домой — вы можете стать его опекуном</p>
        <div className={styles.box}>
            <div className={styles.box__item}>
                <div className={styles.box__title}>Подарить радость</div>
                <div className={styles.box__subtitle}>Нашим подопечным будет приятно любое внимание!</div>
                <ArrowButton variant='filled' color='accent'>Купить подарок</ArrowButton>
            </div>
            <div className={styles.box__item}>
                <div className={styles.box__title}>Оплатить питание</div>
                <div className={styles.box__subtitle}>Котик будет вкусно кушать благодаря вам.</div>
                <ArrowButton variant='filled' color='primary'>Покормить</ArrowButton>
            </div>
            <div className={styles.box__item}>
                <div className={styles.box__title}>Посетить</div>
                <div className={styles.box__subtitle}>Вы можете прийти в приют и поиграть с питомцем.</div>
                <ArrowButton variant='filled' color='primary'>Узнать как</ArrowButton>
            </div>
            <div className={styles.box__item}>
                <div className={styles.box__title}>Приютить на время</div>
                <div className={styles.box__subtitle}>В приютах не хватает мест и мы нуждаемся в людях!</div>
                <ArrowButton variant='filled' color='primary'>Заполнить анкету</ArrowButton>
            </div>
        </div>
    </div>
  )
}

export default Actions

//Кнопки со стрелкой в компоненту лучше закинуть как с BaseButton