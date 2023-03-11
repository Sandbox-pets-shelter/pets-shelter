import React from 'react'
// email, tel, text, number, search, password
// states: default, invalid, disabled
type Props = {
  onChange: (str: string) => void
  placeholder: string
  type: string
  name: string
  value?: string
};
function Input({ onChange, type, name, placeholder, value = "" }: Props) {
  return (
    <>
    {type !== 'number' && type !== 'password' && type !== 'email' ?
    <input
      onChange={event => onChange(event.target.value)}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
    />
    :
    <input
      onChange={event => onChange(event.target.value)}
      type="number"
      name={name}
      placeholder={placeholder}
      value={value}
    />
    }
    </>
    
  );
}

export default Input;