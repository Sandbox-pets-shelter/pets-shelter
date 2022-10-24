import { useState } from 'react'
import { IRadio } from '../../../types/ui'
import s from './styles.module.scss'

export const Switcher = (props: IRadio) => {

  const {name, isChecked, onChange} = props

  const [checked, setChecked] = useState(isChecked)

  const currentStyle = `${s.switch} ${checked && s.switch_checked}`

  const handleChange = () => {
    setChecked(!checked)
    let value = !checked
    if(onChange) onChange(name, value)
  }

  return (
    <label className={currentStyle}>
      <input 
        name={name} 
        type="checkbox" 
        className={s.switch__input} 
        onChange={() => handleChange()}
        checked={checked}
      />
      <div className={s.switch__slider}></div>
    </label>
  )
}