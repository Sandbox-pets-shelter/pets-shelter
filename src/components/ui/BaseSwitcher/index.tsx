import { IBaseSwitcher } from 'types/ui';

import s from './styles.module.scss';

const BaseSwitcher = (props: IBaseSwitcher) => {
  const { isSwitched, onChange } = props;

  const currentStyleCircle = `${s.circle} ${isSwitched && s.circle__checked}`;
  const currentStyleWrapper = `${s.toggle__switch} ${isSwitched && s.toggle__switch_active}`;

  function toggleChecked() {
    onChange(!isSwitched);
  }

  return (
    <div className={currentStyleWrapper} onClick={toggleChecked}>
      <div className={currentStyleCircle}></div>
    </div>
  );
};

export default BaseSwitcher;
