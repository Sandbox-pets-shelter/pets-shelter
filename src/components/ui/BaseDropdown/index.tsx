import s from './styles.module.scss'
import {useState} from 'react'

export const BaseDropdown = (props: any) => {

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
          languages.map((item: any) => (
            <li
              className={`${s.dropdown__item} ${item.label === selectedItem ? s.dropdown__selected : ''}`}
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