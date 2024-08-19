import Input from '../../../components/input'
import React from 'react'

interface CardInputWrapperProps {
  title: string
  boxWidth?: number
  children: React.ReactNode
}

export default function CardInputWrapper({
  title,
  boxWidth,
  children,
}: CardInputWrapperProps) {
  return (
    <Input.Container>
      <Input.Label>{title}</Input.Label>
      <Input.Box className={boxWidth ? `w-${boxWidth}` : ''}>
        {children}
      </Input.Box>
    </Input.Container>
  )
}
