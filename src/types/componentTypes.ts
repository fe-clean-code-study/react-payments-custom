import React from 'react'

export interface SlotComponentProps<T> extends React.HTMLAttributes<T> {
  children: React.ReactNode
}
