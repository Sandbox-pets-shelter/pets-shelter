import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';

import { ReactComponent as EyeDark } from './eye-dark.svg';
import { ReactComponent as EyeDisDark } from './eye-disable-dark.svg';
import { ReactComponent as EyeDis } from './eye-disable-light.svg';
import { ReactComponent as Eye } from './eye-light.svg';

const EyeIcon = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    active?: boolean;
    passwordShown?: boolean;
  }
) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ overflow: 'visible', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      {...props}
    >
      {props.passwordShown ? hover ? <EyeDisDark /> : <EyeDis /> : hover ? <EyeDark /> : <Eye />}
    </div>
  );
};

export default EyeIcon;
