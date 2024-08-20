import React from 'react'
import { SlotComponentProps } from '../../types/componentTypes.ts'

const Container = React.forwardRef<
  HTMLDivElement,
  SlotComponentProps<HTMLDivElement>
>(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={`input-container ${className}`} {...props}>
      {children}
    </div>
  )
})

export default Container
