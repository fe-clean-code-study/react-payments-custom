import React, {createContext, useState} from "react";
import {ICard} from "./type.ts";

interface IPaymentContext {
  cards: Array<ICard>
  addCard: (card: ICard) => void
  removeCard: (id: string) => void
}
export const PaymentsContext = createContext<IPaymentContext | null>(null)

export default function PaymentsProvider ({
  children
} : {
  children: React.ReactNode
}) {
  const [cards, setCards] = useState([])

  const addCard = (card: ICard) => {
    setCards(prev => [...prev, {
      ...card,
      id: new Date().toString()
    }])
  }

  const removeCard = (id: string) => {
    setCards(prev => prev.filter(card => card.id !== id))
  }

  return (
    <PaymentsContext.Provider value={{
      cards, addCard, removeCard
    }}>
      {children}
    </PaymentsContext.Provider>
  )
}