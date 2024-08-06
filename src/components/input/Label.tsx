import React from 'react'
import { SlotComponentProps } from '../../types/componentTypes.ts'

const Label = React.forwardRef<
  HTMLSpanElement,
  SlotComponentProps<HTMLSpanElement>
>(({ className = '', children, ...props }, ref) => {
  return (
    <span ref={ref} className={`input-title ${className}`} {...props}>
      {children}
    </span>
  )
})

export default Label
