import { createContext, useContext } from 'react'
import { UseFormReturnType } from './type.ts'

interface FormProviderProps {
  formMethods: UseFormReturnType<any>
  children: React.ReactNode
}

const FormContext = createContext<UseFormReturnType<any> | null>(null)

export function FormProvider({ children, formMethods }: FormProviderProps) {
  return (
    <FormContext.Provider value={formMethods}>{children}</FormContext.Provider>
  )
}

export function useFormContext<T>() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context as UseFormReturnType<T>
}
