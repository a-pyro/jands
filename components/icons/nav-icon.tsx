import React from 'react'

const NavIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-14 w-14 font-thin ${
            isOpen ? 'text-primary' : 'text-black'
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-14 w-14 cursor-pointer font-thin ${
            isOpen ? 'text-primary' : 'text-black'
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75  12h16.5M12 17.25h8.25"
          />
        </svg>
      )}
    </>
  )
}

export default NavIcon
