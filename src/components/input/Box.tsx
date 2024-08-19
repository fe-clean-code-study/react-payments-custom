import React from 'react'
import { SlotComponentProps } from '../../types/componentTypes.ts'

const Box = React.forwardRef<
  HTMLDivElement,
  SlotComponentProps<HTMLDivElement>
>(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={`input-box ${className}`} {...props}>
      {children}
    </div>
  )
})

export default Box
