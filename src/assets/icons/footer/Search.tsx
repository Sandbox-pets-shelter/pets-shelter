import { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement> & {active?: boolean, className?: string}) => {
  return (
    <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='25'
    fill='none'
    className={props.className}
    viewBox='0 0 24 25'
  >
    <path
      fill='#846DFC'
      fillRule='evenodd'
      stroke='#846DFC'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='0.5'
      d='M16.97 17.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06z'
      clipRule='evenodd'
    ></path>
    <circle
      cx='9.5'
      cy='9.5'
      r='9.5'
      fill={`${props.active ? '#846DFC' : '#E0DBFE'}`}
      transform='matrix(1 0 0 -1 2 21.5)'
    ></circle>
  </svg>
  )
}

export default SearchIcon;
