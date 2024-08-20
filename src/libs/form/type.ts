import { HTMLInputTypeAttribute } from 'react'

export type FormKey<ObjectType> = ObjectType extends object
  ? {
      [PropertyName in keyof ObjectType]: ObjectType[PropertyName] extends Array<
        infer ItemType
      >
        ? ItemType extends object
          ? `${PropertyName & string}.${number}.${FormKey<ItemType> & string}`
          : `${PropertyName & string}.${number}`
        : ObjectType[PropertyName] extends object | undefined
          ? `${PropertyName & string}.${FormKey<ObjectType[PropertyName]> & string}`
          : PropertyName
    }[keyof ObjectType]
  : never

export type TInputRef<T> = Record<FormKey<T>, HTMLInputElement | null>

export type TInputValues<T> = Record<FormKey<T>, string>

export type TWatchUsed<T> = Record<FormKey<T>, boolean>

export interface IFormData {
  [key: string]: unknown
}

export type IFormOptions<T> = Partial<
  Record<
    FormKey<T>,
    {
      type?: HTMLInputTypeAttribute
      default?: string
      check?: (value: string) => boolean
      nextField?: FormKey<T>
    }
  >
>

export interface UseFormReturnType<T = null> {
  register: (key: FormKey<T> | string) => {
    ref: (element: HTMLInputElement | null) => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    defaultValue?: string
    name: string
    type?: React.HTMLInputTypeAttribute
  }
  watch: (key: FormKey<T>) => string
  watchAll: () => T
  setValue: (key: FormKey<T>, value: string) => void
  getValue: (key: FormKey<T>) => string
  getValues: () => T
  handleSubmit: (
    submitFn: (formData: T) => void,
  ) => (e: React.FormEvent) => void
  checkValue: (key: FormKey<T>) => boolean
  checkValueAll: () => boolean
}
