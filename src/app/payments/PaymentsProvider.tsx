import React, { createContext } from "react";
import {ICard} from "./type.ts";

export const PaymentsContext = createContext<Array<ICard>>([])

export default function PaymentsProvider ({
  children
} : {
  children: React.ReactNode
}) {
  return (
    <PaymentsContext.Provider value={[]}>
      {children}
    </PaymentsContext.Provider>
  )
}