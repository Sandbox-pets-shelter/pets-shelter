import * as React from 'react';
import { SVGProps } from 'react';

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#filter0_b_4667_3034)">
      <rect width="40" height="40" rx="20" fill="#6549FB" fillOpacity="0.2" />
    </g>
    <path
      d="M24 16C25.6569 16 27 14.6569 27 13C27 11.3431 25.6569 10 24 10C22.3431 10 21 11.3431 21 13C21 14.6569 22.3431 16 24 16Z"
      fill="white"
    />
    <path
      d="M12 23C13.6569 23 15 21.6569 15 20C15 18.3431 13.6569 17 12 17C10.3431 17 9 18.3431 9 20C9 21.6569 10.3431 23 12 23Z"
      fill="white"
    />
    <path
      d="M24 30C25.6569 30 27 28.6569 27 27C27 25.3431 25.6569 24 24 24C22.3431 24 21 25.3431 21 27C21 28.6569 22.3431 30 24 30Z"
      fill="white"
    />
    <path
      d="M14.59 21.51L21.42 25.49M21.41 14.51L14.59 18.49M27 13C27 14.6569 25.6569 16 24 16C22.3431 16 21 14.6569 21 13C21 11.3431 22.3431 10 24 10C25.6569 10 27 11.3431 27 13ZM15 20C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20C9 18.3431 10.3431 17 12 17C13.6569 17 15 18.3431 15 20ZM27 27C27 28.6569 25.6569 30 24 30C22.3431 30 21 28.6569 21 27C21 25.3431 22.3431 24 24 24C25.6569 24 27 25.3431 27 27Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_b_4667_3034"
        x="-8"
        y="-8"
        width="56"
        height="56"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4667_3034" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4667_3034" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default ShareIcon;
