import React, { createContext, useContext, useState } from 'react'
import { ICard } from './type.ts'

interface IPaymentContext {
  cards: Array<ICard>
  addCard: (card: ICard) => void
  removeCard: (id: string) => void
}

const PaymentsContext = createContext<IPaymentContext | null>(null)

export const usePayments = () => useContext(PaymentsContext)

export const PaymentsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cards, setCards] = useState([])

  const addCard = (card: ICard) => {
    setCards((prev) => [
      ...prev,
      {
        ...card,
        id: new Date().getTime(),
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
