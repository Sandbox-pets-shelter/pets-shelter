import * as React from 'react';
import { SVGProps } from 'react';

const Dot = (props: SVGProps<SVGSVGElement>) => (
  <svg width={8} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#a)">
      <rect width={8} height={8} rx={4} fill="#846DFC" />
    </g>
    <defs>
      <filter id="a" x={-8} y={-8} width={24} height={24} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2800_4018" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2800_4018" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default Dot;
