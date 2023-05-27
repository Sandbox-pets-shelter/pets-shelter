import ArrowDown from 'assets/icons/arrow-down.svg';
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteElement } from 'types/types';

import s from './styles.module.scss';

interface BaseDropdownProps {
  items: RouteElement[];
}

const BaseDropdown: FC<BaseDropdownProps> = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  const title = items[0];
  const dropdownItems = items.slice(1);

  return (
    <div className={s.dropdown} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span>
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
