import * as React from 'react';
import { SVGProps } from 'react';

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill="#fff"
    />
    <path
      d="m6.59 12.51 6.83 3.98m-.01-10.98L6.59 9.49M19 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke="#fff"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShareIcon;
