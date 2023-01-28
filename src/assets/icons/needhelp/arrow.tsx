import * as React from 'react'

const Arrow = (props: any) => (
  <svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1 8h14m0 0L8 1m7 7-7 7'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default Arrow
