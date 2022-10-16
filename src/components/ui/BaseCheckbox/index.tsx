import s from './styles.module.scss'
import { ICheckbox } from '../../../types/ui'
import CheckMark from '../../../img/icons/CheckMark.svg'

export const BaseCheckbox = (props: ICheckbox) => {

  const {name, content, isChecked, value, change} = props
  
  const currentStyle = `${s.checkbox} ${isChecked && s.checkbox_checked}`

  const itemValue = value || 'help'

  const toggleChecked = (name: string, value: string) => {
    if(change) change(name, itemValue)
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
        value={itemValue}
        className={s.checkbox__input}
        onChange={() => toggleChecked(name, itemValue)}
        checked={isChecked}
      />
  </label>
  )
}