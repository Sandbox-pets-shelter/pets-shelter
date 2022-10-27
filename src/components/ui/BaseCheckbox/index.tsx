import { ICheckbox } from '../../../types/ui'
import CheckMark from '../../../assets/icons/CheckMark.svg'

import s from './styles.module.scss'

const BaseCheckbox = (props: ICheckbox) => {

  const { name, content, isChecked, value, change } = props

  const currentStyle = `${s.checkbox} ${isChecked && s.checkbox_checked}`

  const toggleChecked = (name: string, value: string) => {
    if (change) change(name, value)
  }

  return (
    <label className={currentStyle}>
      <div className={s.checkbox__mark}>
        <img src={CheckMark} alt='checkmark' className={s.checkbox__icon}/>
      </div>
      {content}
      <input
        type='checkbox'
        name={name}
        value={value}
        className={s.checkbox__input}
        onChange={() => toggleChecked(name, value)}
        checked={isChecked}
      />
    </label>
  )
}

export default BaseCheckbox