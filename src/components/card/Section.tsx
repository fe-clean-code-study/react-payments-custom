import React, { ComponentProps } from 'react'

export interface SectionProps extends ComponentProps<'div'> {
  position: 'top' | 'bottom' | 'middle'
  role?: 'number' | 'info'
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, position, role, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`card-${position}${role ? `__${role}` : ''} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  },
)

export default Section
