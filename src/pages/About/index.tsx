import InputField from 'components/ui/Input'
import { useState } from 'react'

export const About = () => {
  const [nameInput, setNameInput] = useState('');
  const onChange = (str: string) => {
    setNameInput(str)
  }
  return <div>
    <InputField type='email' label='Почта' placeholder='Введите почту...' name='name' value={nameInput} onChange={onChange} required={true}/>
    <InputField type='text' placeholder='Введите имя...' name='name' value={nameInput} disabled={true} onChange={onChange} required={true}/>
    <InputField type='number' placeholder='0' name='name' value={nameInput} onChange={onChange} required={true} label='Сколько хотели накормить котов?'/>
    <InputField type='tel' label='Телефон' placeholder='(___) - ___ - ____' name='name' value={nameInput} onChange={onChange} required={true} disabled={true}/>
    <InputField type='password' placeholder='Введите пароль...' name='name' value={nameInput} onChange={onChange}/>
  </div>;
};
