import { SVGProps } from 'react';

const IncreaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#a)">
      <rect width={40} height={40} rx={20} fill="#6549FB" fillOpacity={0.2} />
    </g>
    <path
      d="m22 18 7-7m0 0h-6m6 0v6m-11 5-7 7m0 0h6m-6 0v-6"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter id="a" x={-8} y={-8} width={56} height={56} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1314_5274" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1314_5274" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default IncreaseIcon;
