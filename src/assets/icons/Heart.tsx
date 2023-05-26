import * as React from 'react';
import { SVGProps } from 'react';

interface likeProps extends SVGProps<SVGSVGElement> {
  active?: boolean
}

const LikeIcon = (props: likeProps) => {
  const { active, ...svgProps } = props

  return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: active ? '#fff' : 'rgba(101, 73, 251, 0.2)', boxShadow: active ? '0px 8px 20px rgba(153, 153, 153, 0.2)' : 'none' }}>
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.993 5.136c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.635 2.105 6.585 6.544 8.207 7.98.182.162.272.242.378.274a.504.504 0 0 0 .286 0c.106-.032.197-.112.378-.273 1.623-1.437 6.573-5.876 8.208-7.98 1.967-2.532 1.658-6.133-.89-8.251-2.549-2.118-5.84-1.512-7.839.826Z"
        fill={`${active ? '#E54949' : '#fff'}`}
      />
    </svg>
  </div>
  )
}

export default LikeIcon