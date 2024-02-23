import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReactComponent as Heart } from './HeartInactive.svg';
import { ReactComponent as HeartActive } from './like.svg';

interface likeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active?: boolean;
  customHeight?: string;
  customWidth?: string;
}

const LikeIcon = (props: likeProps) => {
  const { active, customHeight, customWidth, ...DivProps } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: customHeight || '48px',
        width: customWidth || '48px',
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
