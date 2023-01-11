import React from 'react'

export const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 font-medium bg-blue-gradient font-poppins text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Get Started
    </button>
  )
}
