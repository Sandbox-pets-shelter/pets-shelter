import { FC, MouseEvent, useState } from 'react';

import { NavLink } from 'react-router-dom';

import s from './styles.module.scss';

import { RouteElement } from '../../../types/types';

interface BaseDropdownProps {
  items: RouteElement[];
}

const BaseDropdown: FC<BaseDropdownProps> = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  const title = items[0];
  const dropdownItems = items.slice(1);

  const toggleDropdown = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <div className={s.dropdown}>
      <span onClick={toggleDropdown}>
        {title.name}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`} />
      </span>
      <div className={`${s.dropdown__body} ${isOpen ? s.dropdown__body_open : ''}`}>
        {dropdownItems.map((item: RouteElement) => (
          <NavLink to={item.path} className={s.dropdown__item} key={item.id}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BaseDropdown;
