import s from './styles.module.scss'
import {routeElements} from '../../configs/routeElements'
import {NavLink} from 'react-router-dom'
import SearchIcon from '../../img/icons/Search.svg'
import HeartIcon from '../../img/icons/Heart.svg'
import {BaseDropdown} from '../ui/BaseDropdown'
import {useCallback, useState} from 'react'

const languages = [
  {value: '0', label: 'Ру', code: 'ru-RU'},
  {value: '1', label: 'Кз', code: 'kk-KZ'}
]

export const Header = () => {

  const lang = languages.find(item => item.code === navigator.language)

  const [selectedItem, setSelectedItem] = useState(lang?.label)

  const dropdown = useCallback((item: any) => {
    setSelectedItem(item)
    console.log('dropdown', item)
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <p className={s.header__title}>
          HelpPet
        </p>
        <ul className={s.header__list}>
          {
            routeElements.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  end
                  className={({isActive}) => isActive ? `${s.active}` : undefined}
                >
                  {item.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <div className={s.header__panel}>
          <img
            src={SearchIcon}
            alt="search icon"
            style={{'cursor': 'pointer'}}
          />
          <img
            src={HeartIcon}
            alt="heart icon"
            style={{'cursor': 'pointer'}}
          />
          <BaseDropdown onChange={dropdown} languages={languages} selectedItem={selectedItem}/>
        </div>
      </div>
    </div>
  )
}