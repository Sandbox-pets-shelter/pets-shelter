import s from './styles.module.scss'
import {IRadio} from '../../../types/ui'

export const BaseRadio = (props: IRadio) => {

  const {name, content, isChecked, value, change} = props

  const currentStyle = `${s.radio} ${isChecked && s.radio_checked}`

  const toggleChecked = (name: string, value: string) => {
    if (change) change(name, value)
  }

  return (
    <label className={currentStyle}>
      <div className={s.radio__mark}>
        <div className={s.radio__point}></div>
      </div>
      {content}
      <input
        type='radio'
        name={name}
        value={value}
        className={s.radio__input}
        onChange={() => toggleChecked(name, value)}
        checked={isChecked}
      />
    </label>
  )
}