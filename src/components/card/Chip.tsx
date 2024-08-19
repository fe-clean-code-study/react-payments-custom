import React, { ComponentProps } from 'react'

export interface ChipProps extends ComponentProps<'div'> {
  size: 'small' | 'big'
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ size, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`${size}-card__chip ${className}`} {...props} />
    )
  },
)

export default Chip
