import React from 'react'
import { SlotComponentProps } from '../../types/componentTypes.ts'

const InputBox = React.forwardRef(
  (
    { children, className = '', ...props }: SlotComponentProps<HTMLDivElement>,
    ref,
  ) => {
    return (
      <div ref={ref} className={`input-box ${className}`} {...props}>
        {children}
      </div>
    )
  },
)

export default InputBox
