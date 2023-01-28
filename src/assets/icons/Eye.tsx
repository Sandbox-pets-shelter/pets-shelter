import { SVGProps } from 'react'

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width={20}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.13 4.853a3.085 3.085 0 0 1 0 4.294C17.174 11.205 13.816 14 10 14 6.184 14 2.825 11.205.87 9.147a3.085 3.085 0 0 1 0-4.294C2.825 2.795 6.184 0 10 0c3.816 0 7.174 2.795 9.13 4.853Z"
        fill="#A392FD"
      />
      <path d="M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#fff" />
    </svg>
  )

  export default EyeIcon