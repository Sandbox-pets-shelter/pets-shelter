import { IRadio } from 'types/ui';

import s from './styles.module.scss';

const BaseRadio = (props: IRadio) => {
  const { name, topping, value, change } = props;

  const currentStyle = `${s.checkbox} ${topping === value && s.checkbox_checked}`;

  const toggleChecked = () => {
    change(value);
  };

  return (
    <label className={currentStyle}>
      <div className={s.checkbox__mark}>
        <div className={s.checkbox__icon}></div>
      </div>
      {value}
      <input type="radio" name={name} value={value} className={s.checkbox__input} onChange={toggleChecked} />
    </label>
  );
};

export default BaseRadio;
