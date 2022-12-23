import close from '../../assets/icons/close.svg'
import style from './styles.module.scss'

export const Popup = (props: any) => {


    return (
      <div className={style.popupBox}>
        <div className={style.box}>
          <span className={style.closeIcon} onClick={props.handleClose}>{close}</span>
          {props.content}
        </div>
      </div>
    )
  }
