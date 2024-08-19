import React, { ComponentProps } from 'react'

export interface BoxProps extends ComponentProps<'div'> {
  size: 'small' | 'big'
  color: string
  children: React.ReactNode
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ size, color, children, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`card-box ${className}`} {...props}>
        <div className={`${size}-card`} style={{ backgroundColor: color }}>
          {children}
        </div>
      </div>
    )
  },
)

export default Box
