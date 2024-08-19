import React from 'react'

export interface ValueProps extends React.ComponentProps<'input'> {
  variant?: 'underline' | 'basic'
}

const Value = React.forwardRef<HTMLInputElement, ValueProps>(
  ({ type = 'text', className = '', variant = 'basic', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`input-${variant} ${className}`}
        autoComplete={type === 'password' ? 'new-password' : ''}
        {...props}
      />
    )
  },
)

export default Value
