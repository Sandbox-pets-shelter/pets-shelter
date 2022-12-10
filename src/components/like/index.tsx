import HeartIcon from '../../assets/icons/Heart'
import style from './styles.module.scss'

export const Like = ({ like, handleClicked, elem }:any) => {

  return (
    <div>
      {like === true && <div className={style.icon_active} onClick={() => handleClicked(elem)}><HeartIcon/></div>}
      {like === false && <div className={style.icon} onClick={() => handleClicked(elem)}><HeartIcon className={style.card__like}/></div>}
    </div>
  )
}