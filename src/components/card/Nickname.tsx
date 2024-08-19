import React, { ComponentProps } from 'react'

export interface NicknameProps extends ComponentProps<'span'> {
  children: React.ReactNode
}

const Nickname = React.forwardRef<HTMLDivElement, NicknameProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <span ref={ref} className={`card-nickname ${className}`} {...props}>
        {children}
      </span>
    )
  },
)

export default Nickname
