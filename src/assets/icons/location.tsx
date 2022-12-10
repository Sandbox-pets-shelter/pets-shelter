import * as React from 'react'

import { SVGProps } from 'react'

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={20}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18 8.889C18 13.799 12.375 20 9 20S0 13.798 0 8.889C0 3.979 4.03 0 9 0s9 3.98 9 8.889Z'
      fill='#846DFC'
    />
    <circle cx={9} cy={9} r={3} fill='#fff' />
  </svg>
)

export default LocationIcon
