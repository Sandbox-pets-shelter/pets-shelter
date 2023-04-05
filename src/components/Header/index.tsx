import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './styles.module.scss';

import { BaseDropdown } from '..';
import HeartIcon from '../../assets/icons/footer/Heart.svg';
import SearchIcon from '../../assets/icons/footer/Search';
import logo from '../../assets/icons/Logo.svg';
import { routeElements } from '../../configs/routeElements';
import { IBaseDropdown } from '../../types/ui';

const languages = [
  { value: '0', label: 'Ру', code: 'ru-RU' },
  { value: '1', label: 'Кз', code: 'kk-KZ' }
];

const Header = () => {
  const lang = languages.find((item) => item.code === navigator.language);

  const [selectedItem, setSelectedItem] = useState<IBaseDropdown | null>(null);

  const dropdown = useCallback((item: IBaseDropdown) => {
    setSelectedItem(item);
    console.log('dropdown', item);
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <p className={s.header__title}>
          <img src={logo} alt="Логотип" />
        </p>
        <ul className={s.header__list}>
          {routeElements.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path} end className={({ isActive }) => (isActive ? `${s.active}` : undefined)}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={s.header__panel}>
          <SearchIcon/>
          <img src={HeartIcon} alt="heart icon" style={{ cursor: 'pointer' }} />
          <BaseDropdown onChange={dropdown} languages={languages} selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
};

export default Header;
