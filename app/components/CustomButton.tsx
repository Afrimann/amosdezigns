import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({containerStyles,title,handleEvent}:CustomButtonProps) => {
  return (
    <button
    onClick={handleEvent}
    className={containerStyles}
    type='button'
    >
        {title}
    </button>
  )
}

export default CustomButton