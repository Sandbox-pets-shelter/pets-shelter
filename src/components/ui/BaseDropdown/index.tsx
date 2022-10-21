import s from './styles.module.scss'
import {useState} from 'react'
import {IBaseDropdown} from '../../../types/ui'

interface IProps {
  languages: IBaseDropdown[]
  selectedItem: IBaseDropdown | null
  onChange: (item: IBaseDropdown) => void
}

export const BaseDropdown = (props: IProps) => {

  const {languages, selectedItem, onChange} = props

  const [isOpen, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!isOpen)
  }

  const handleItemClick = (item: any): void => {
    onChange(item)
    toggleDropdown()
  }

  return (
    <div
      className={s.dropdown}
      onClick={toggleDropdown}
    >
      <p>
        {selectedItem?.label || 'Ру'}
      </p>
      <ul className={`${s.dropdown__body} ${isOpen ? s.dropdown__body_open : ''}`}>
        {
          languages.map((item: IBaseDropdown) => (
            <li
              className={`${s.dropdown__item} ${item.label === selectedItem?.label ? s.dropdown__selected : ''}`}
              key={item.value}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </li>
          ))
        }
      </ul>
    </div>
  )
}