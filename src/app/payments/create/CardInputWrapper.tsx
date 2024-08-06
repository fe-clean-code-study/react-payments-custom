import { InputBox, InputContainer, Label } from '../../../components/input'
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
    <InputContainer>
      <Label>{title}</Label>
      <InputBox className={boxWidth ? `w-${boxWidth}` : ''}>
        {children}
      </InputBox>
    </InputContainer>
  )
}
