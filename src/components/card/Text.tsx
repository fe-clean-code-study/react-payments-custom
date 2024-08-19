import React, { ComponentProps } from 'react'

export interface TextProps extends ComponentProps<'span'> {
  size: 'small' | 'big'
  children: React.ReactNode
}

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ size, children, className = '', ...props }, ref) => {
    return (
      <span ref={ref} className={`card-text__${size} ${className}`} {...props}>
        {children}
      </span>
    )
  },
)

export default Text
