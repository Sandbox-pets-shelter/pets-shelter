import { SVGProps } from 'react';

// import * as React from "react"

const ArrowleftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#a)">
      <rect width={40} height={40} rx={20} transform="matrix(-1 0 0 1 40 0)" fill="#6549FB" fillOpacity={0.2} />
      <path d="M28 20H12m0 0 6-6m-6 6 6 6" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <filter id="a" x={-8} y={-8} width={56} height={56} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1334_5410" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1334_5410" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default ArrowleftIcon;
