import { IBaseSwitcher } from 'types/ui';

import s from './styles.module.scss';

const BaseSwitcher = (props: IBaseSwitcher) => {
  const { isSwitched, onChange } = props;

  const currentStyleWrapper = `${s.switcher} ${isSwitched && s.switcher_active}`;
  const currentStyleCircle = `${s.circle} ${isSwitched && s.circle_active}`;

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
