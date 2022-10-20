import HeartIcon from '../../assets/icons/Heart'
import s from './styles.module.scss'

export const Like = ({like, handleClicked, elem}:any) => {

  return (
    <div>
      {like === true && <div className={s.icon_active} onClick={() => handleClicked(elem)}><HeartIcon/></div>}
      {like === false && <div className={s.icon} onClick={() => handleClicked(elem)}><HeartIcon className={s.card__like}/></div>}
    </div>
  )
}