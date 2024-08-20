import React, { ComponentProps } from 'react'

export interface DateProps extends ComponentProps<'span'> {
  size: 'small' | 'big'
  month: string
  year: string
}

const Date = React.forwardRef<HTMLDivElement, DateProps>(
  ({ size, month, year, className = '', ...props }, ref) => {
    return (
      <span ref={ref} className={`card-text__${size} ${className}`} {...props}>
        {month} / {year}
      </span>
    )
  },
)

export default Date
