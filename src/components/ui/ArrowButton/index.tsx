import Arrow from 'assets/icons/needhelp/arrow';
import { Link } from 'react-router-dom';

import { IBaseButton } from 'types/ui';

import s from './styles.module.scss';

const ArrowButton = (props: IBaseButton) => {
  const { variant, color, disabled, children, click, endIcon, link } = props;

  const btnType = `btn_${variant}-${color}`;

  const currentStyle = `${s.btn} ${s[btnType]}`;

  return (
    <Link to={`${link}`}>
      <button className={currentStyle} disabled={disabled} onClick={click}>
        {children}
        <Arrow className={currentStyle}></Arrow>
      </button>
    </Link>
  );
};

export default ArrowButton;
