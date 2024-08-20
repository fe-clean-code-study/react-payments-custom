import React, { createContext, useContext, useState } from 'react'
import { ICard } from '../../types/paymentTypes.ts'

interface IPaymentContext {
  cards: Array<ICard>
  addCard: (card: ICard) => void
  editCard: (id: string, card: Partial<ICard>) => string
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
    const newCard = { ...card, id: 'new' }
    setCards((prev) => [...prev, newCard])
  }

  const editCard = (id: string, updatedCard: Partial<ICard>) => {
    const cardId = id === 'new' ? `${new Date().getTime()}` : id
    setCards((prev) =>
      prev.map((card) =>
        card.id === id
          ? {
              ...card,
              id: cardId,
              ...updatedCard,
            }
          : card,
      ),
    )
    return cardId
  }

  const removeCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id))
  }

  return (
    <PaymentsContext.Provider
      value={{
        cards,
        addCard,
        editCard,
        removeCard,
      }}
    >
      {children}
    </PaymentsContext.Provider>
  )
}
