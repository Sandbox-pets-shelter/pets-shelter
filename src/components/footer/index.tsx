import s from './styles.module.scss'
import {footerTextRight, iconsFooter} from '../../mocks/footer'

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <p className={s.left__undertitle}>
          Социальный проект
        </p>
        <p className={s.left__title}>
          HelpPet
        </p>
        <p className={s.left__subtitle}>
          (Тут о надо написать о проекте, кто его создал и почему). Для добрых дел время всегда найдётся. Это доказал
          человек, ездивший в Питер по своим делам. Как-то проходя один из дворов, он обнаружил там хорошую молоденькую
          кошечку, совсем ещё подростка. Он приманил её и забрал с собой в столицу. В дороге человек и кошка почти
          подружились и узнали друг друга получше.
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
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className={s.right}>
        {
          footerTextRight.map(item => (
            <>
              <h2 key={item.id}>
                {item.title}
              </h2>
              {
                item.subtitleLinks.map(link => (
                  <a key={link.id}>
                    {link.text}
                  </a>
                ))
              }
            </>
          ))
        }
      </div>
    </div>
  )
}