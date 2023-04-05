import React from 'react'

import s from './styles.module.scss'

import SearchIcon from '../../../assets/icons/footer/Search';
// email
// num - tel, number,
// password
// text, search
// states: default, invalid, disabled
// to variables.scss

type Props = {
  onChange: (str: string) => void
  placeholder: string
  type: string
  name: string
  value?: string
};

const InputField = ({ onChange, type, name, placeholder, value = '' }: Props) => {
    if(type === 'password') {
      return (
        <div className={`${s.wrapper} ${value !== '' && s.active}`}>
          <input
            onChange={event => onChange(event.target.value)}
            type="password"
            name={name}
            placeholder={placeholder}
            value={value}
          />
        </div>
      )
    }
    if(type === 'email') {
      return (
        <div className={`${s.wrapper} ${value !== '' && s.active}`}>
          <input
            onChange={event => onChange(event.target.value)}
            type="email"
            name={name}
            placeholder={placeholder}
            value={value}
          />
        </div>
      )
    }
    if(type === 'number') {
      return (
        <div className={`${s.wrapper} ${value !== '' && s.active}`}>
          <input
            onChange={event => onChange(event.target.value)}
            type="number"
            name={name}
            placeholder={placeholder}
            value={value}
          />
        </div>
      )
    }
    if(type === 'tel') {
      return (
        <div className={`${s.wrapper} ${value !== '' && s.active}`}>
          <input
            onChange={event => onChange(event.target.value)}
            type="number"
            name={name}
            placeholder={placeholder}
            value={value}
          />
        </div>
      )
    }
    if(type === 'text') {
      return (
        <div className={`${s.wrapper} ${value !== '' && s.active}`}>
          <input
            onChange={event => onChange(event.target.value)}
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
          />
        </div>
      )
    }
    if(type === 'search') {
      return (
        <div className={`${s.wrapper} ${s.withIcon} ${value !== '' && s.active}`}>
          <input
            onChange={event => onChange(event.target.value)}
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
          />
          <SearchIcon className={s.icon} active={value !== '' && true}/>
        </div>
      )
    }
    return null
}

export default InputField;