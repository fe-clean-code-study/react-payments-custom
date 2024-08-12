import React from 'react'

interface InputProps extends React.ComponentProps<'input'> {
  variant?: 'underline' | 'basic'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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

export default Input
