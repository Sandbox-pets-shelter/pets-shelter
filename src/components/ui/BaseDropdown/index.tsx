import ArrowDown from 'assets/icons/arrow-down.svg';
import { FC, MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteElement } from 'types/types';

import { transform } from 'typescript';

import s from './styles.module.scss';

interface BaseDropdownProps {
  items: RouteElement[];
}

const BaseDropdown: FC<BaseDropdownProps> = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  const title = items[0];
  const dropdownItems = items.slice(1);

  const clickOutside = (e: any) => {
    setOpen(false);
    document.removeEventListener('click', clickOutside);
  };

  const toggleDropdown = async (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    setOpen((prev) => !prev);
    setTimeout(() =>
      isOpen ? document.removeEventListener('click', clickOutside) : document.addEventListener('click', clickOutside)
    );
  };

  return (
    <div className={s.dropdown}>
      <span onClick={toggleDropdown}>
        {title.name}
        <img src={ArrowDown} style={{ transform: isOpen ? 'rotateX(180deg)' : 'none' }} />
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
