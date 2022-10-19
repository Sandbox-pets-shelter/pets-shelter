import HeartIcon from '../../assets/icons/Heart'
import s from './styles.module.scss'

export const Like = ({like, handleClicked, elem}:any) => {

  return (
    <div className={s.icon} onClick={() => handleClicked(elem)}>
      {like === true && <HeartIcon/>}
      {like === false && <HeartIcon className={s.card__like}/>}
    </div>
  )
}