import React from 'react'

const Input = React.forwardRef(
  (
    {
      type = 'text',
      className = '',
      ...props
    }: React.InputHTMLAttributes<HTMLInputElement>,
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`input-basic ${className}`}
        autoComplete={type === 'password' ? 'new-password' : ''}
        {...props}
      />
    )
  },
)

export default Input
