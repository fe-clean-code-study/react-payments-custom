import React from 'react'
import { SlotComponentProps } from '../../types/componentTypes.ts'

const InputContainer = React.forwardRef(
  (
    { children, className = '', ...props }: SlotComponentProps<HTMLDivElement>,
    ref,
  ) => {
    return (
      <div ref={ref} className={`input-container ${className}`} {...props}>
        {children}
      </div>
    )
  },
)

export default InputContainer
