import React, { createContext, useContext, useState } from 'react'
import { ICard } from '../../types/paymentTypes.ts'

interface IPaymentContext {
  cards: Array<ICard>
  addCard: (card: ICard) => void
  removeCard: (id: string) => void
}

const PaymentsContext = createContext<IPaymentContext | null>(null)

export const usePayments = () => {
  const context = useContext(PaymentsContext)
  if (context === null) {
    throw new Error('usePayments must be used within the PaymentsContext')
  }
  return context
}

export const PaymentsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cards, setCards] = useState<ICard[]>([])

  const addCard = (card: ICard) => {
    setCards((prev) => [
      ...prev,
      {
        ...card,
        id: `${new Date().getTime()}`,
      },
    ])
  }

  const removeCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id))
  }

  return (
    <PaymentsContext.Provider
      value={{
        cards,
        addCard,
        removeCard,
      }}
    >
      {children}
    </PaymentsContext.Provider>
  )
}
