import CheckMark from 'assets/icons/CheckMark.svg';
import CheckMarkHover from 'assets/icons/CheckMarkHover.svg';
import { ICheckbox } from 'types/ui';

import s from './styles.module.scss';

const BaseCheckbox = (props: ICheckbox) => {
  const { name, content, isChecked, value, change, onChange } = props;

  const currentStyle = `${s.checkbox} ${isChecked && s.checkbox_checked}`;

  const toggleChecked = () => {
    if (change && name && value) {
      change(name, value);
    }
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className={currentStyle}>
      <div className={s.checkbox__mark}>
        <img src={CheckMark} alt="checkmark" className={s.checkbox__icon} />
        <img src={CheckMarkHover} alt="markhover" className={s.checkbox__icon__hover} />
      </div>
      {content}
      <input
        type="checkbox"
        name={name}
        value={value}
        className={s.checkbox__input}
        onChange={toggleChecked}
        checked={isChecked}
      />
    </label>
  );
};

export default BaseCheckbox;
