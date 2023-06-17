import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReactComponent as HeartActive } from './Heart.svg';
import { ReactComponent as Heart } from './HeartInactive.svg';

interface likeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active?: boolean;
}

const LikeIcon = (props: likeProps) => {
  const { active, ...DivProps } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: active ? '#fff' : 'rgba(101, 73, 251, 0.2)',
        boxShadow: active ? '0px 8px 20px rgba(153, 153, 153, 0.2)' : 'none'
      }}
      {...DivProps}
    >
      {active ? <HeartActive /> : <Heart />}
    </div>
  );
};

export default LikeIcon;
