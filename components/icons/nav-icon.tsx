import React from 'react'

const NavIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={`M3.75 6.75h16.5M3.75 ${
          isOpen ? ' 12h16.5M12 17.25h8.25' : '12h16.5m-16.5 5.25H12'
        }`}
      />
    </svg>
  )
}

export default NavIcon
