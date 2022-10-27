import { useTranslation } from 'react-i18next'

import { footerTextRight, iconsFooter, rulesLinks } from '../../mocks/footer'
import { IFooterText, ILink } from '../../types/ui'

import s from './styles.module.scss'

const Footer = () => {

  const { t } = useTranslation()

  return (
    <div>
      <div className={s.content}>
        <div className={s.left}>
          <p className={s.left__undertitle}>
            {t('footer.under_title')}
          </p>
          <p className={s.left__title}>
            {t('title')}
          </p>
          <p className={s.left__subtitle}>
            {t('footer.subtitle')}
          </p>
          <p className={s.left__subscribe}>
            {t('footer.subscribe')}
          </p>
          <div className={s.left__icons}>
            {
              iconsFooter.map(icon => (
                <div
                  key={icon.id}
                  className={s.left__social}
                >
                  <img
                    className={s.left__icon}
                    src={icon.src}
                    alt='icon'
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className={s.right}>
          {
            footerTextRight.map((item: IFooterText) => (
              <div
                className={s[item.class]}
                key={item.id}
              >
                {
                  item.title &&
                  <h2
                    className={s.right__title}
                    key={item.id}
                  >
                    {item.title}
                  </h2>
                }
                <ul
                  className={`${s.right__links}
                  ${item.modificator ? s.right__links_row : ''}
                  ${item.custom ? s.right__links_row_custom : ''}`}
                >
                  {
                    item.subtitleLinks.map((link: ILink) => (
                      <a
                        key={link.id}
                        className={s.right__link}
                      >
                        {
                          link.text ?
                            link.text
                            : <img
                              src={link.src}
                              className={s.right__links__icon}
                              alt="icon"
                            />
                        }
                      </a>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className={s.rules}>
        <ul className={s.rules__links}>
          {
            rulesLinks.map((link: ILink) => (
              <li key={link.id} className={s.rules__link}>
                {
                  link.text
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Footer