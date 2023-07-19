import HeartIcon from 'assets/icons/footer/Heart.svg';
import logo from 'assets/icons/Logo.svg';
import mobileLogo from 'assets/icons/mobileMenu.svg';
import roundClose from 'assets/icons/roundClose.svg';
import SearchIcon from 'assets/icons/Search.svg';
import { LanguageDropdown } from 'components';
import BaseDropdown from 'components/ui/BaseDropdown';
import { appRoutes } from 'configs/appRoutes';
import { helpRoutes, petsRoutes, routeElements } from 'configs/routeElements';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ILanguageDropdown } from 'types/ui';

import { MobileMenu } from './MobileMenu';
import s from './styles.module.scss';

const languages = [
  { value: '0', label: 'Ру', code: 'ru-RU' },
  { value: '1', label: 'Кз', code: 'kk-KZ' }
];

const Header = () => {
  const lang = languages.find((item) => item.code === navigator.language);

  const [selectedItem, setSelectedItem] = useState<ILanguageDropdown | null>(null);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toogleMobileMenu = () => setIsMobileMenuVisible((prev) => !prev);

  const dropdown = useCallback((item: ILanguageDropdown) => {
    setSelectedItem(item);
    console.log('dropdown', item);
  }, []);

  return (
    <header className={s.wrapper}>
      <section className={s.header}>
        <img
          className={s.header__mobile_menu_icon}
          src={isMobileMenuVisible ? roundClose : mobileLogo}
          onClick={toogleMobileMenu}
        />

        <NavLink to={appRoutes.home}>
          <img className={s.header__title} src={logo} alt="Логотип" />
        </NavLink>
        <ul className={s.header__list}>
          <BaseDropdown items={helpRoutes} />
          <BaseDropdown items={petsRoutes} />
          {routeElements.slice(2).map((item) => (
            <li key={item.id}>
              <NavLink to={item.path} end className={({ isActive }) => (isActive ? `${s.active}` : undefined)}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={s.header__panel}>
          <img
            src={SearchIcon}
            alt="search icon"
            style={{ cursor: 'pointer' }}
            className={s.header__panel__searchIcon}
          />
          <img src={HeartIcon} alt="heart icon" style={{ cursor: 'pointer' }} />
          <LanguageDropdown onChange={dropdown} languages={languages} selectedItem={selectedItem} />
        </div>
      </section>
      <MobileMenu isOpen={isMobileMenuVisible} />
    </header>
  );
};

export default Header;
