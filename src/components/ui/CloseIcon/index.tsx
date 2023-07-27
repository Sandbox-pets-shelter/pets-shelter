import { FC } from 'react';

import s from './style.module.scss';

type CloseIconVariants = 'rounded' | 'onlyIcon';

type CloseIconProps = {
  onClick?: () => void;
  variant?: CloseIconVariants;
};

const CloseIcon: FC<CloseIconProps> = ({ onClick, variant = 'rounded' }) => {
  const closeIconVariants = {
    rounded: s.closeIcon__rounded,
    onlyIcon: s.closeIcon__onlyIcon
  };

  return <span className={`${s.closeIcon} ${closeIconVariants[variant]}`} onClick={onClick} />;
};

export default CloseIcon;
