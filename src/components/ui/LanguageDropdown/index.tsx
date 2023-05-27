import { useState } from 'react';

import { ILanguageDropdown } from 'types/ui';

import s from './styles.module.scss';

interface IProps {
  languages: ILanguageDropdown[];
  selectedItem: ILanguageDropdown | null;
  onChange: (item: ILanguageDropdown) => void;
}

const LanguageDropdown = (props: IProps) => {
  const { languages, selectedItem, onChange } = props;

  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  const handleItemClick = (item: any): void => {
    onChange(item);
    toggleDropdown();
  };

  return (
    <div
      className={s.dropdown}
      onClick={toggleDropdown}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <p>{selectedItem?.label || 'Ру'}</p>
      <ul className={`${s.dropdown__body} ${isOpen ? s.dropdown__body_open : ''}`} onMouseLeave={() => setOpen(false)}>
        {languages.map((item: ILanguageDropdown) => (
          <li
            className={`${s.dropdown__item} ${item.label === selectedItem?.label ? s.dropdown__selected : ''}`}
            key={item.value}
            onClick={() => handleItemClick(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
