import React, { useRef, useState } from 'react'
import makeFormValues from './makeFormValues.ts'
import {
  FormKey,
  IFormData,
  IFormOptions,
  TInputRef,
  TInputValues,
  TWatchUsed,
  UseFormReturnType,
} from './type.ts'

interface UseFormParams<T> {
  formOptions?: IFormOptions<T>
  defaultValues?: T
}

const useForm = <T extends IFormData>({
  formOptions,
  defaultValues,
}: UseFormParams<T> = {}): UseFormReturnType<T> => {
  const inputRef = useRef<TInputRef<T>>({} as TInputRef<T>)
  const [watchValues, setWatchValues] = useState<TInputValues<T>>(
    {} as TInputValues<T>,
  )

  let watchUsedAll = false
  let watchUsed = {} as TWatchUsed<T>

  const _focusNext = (key: FormKey<T>, value: string) => {
    if (
      formOptions &&
      formOptions[key] &&
      formOptions[key].check &&
      formOptions[key].check(value)
    ) {
      const nextField = formOptions[key].nextField
      if (nextField && inputRef.current[nextField]) {
        inputRef.current[nextField].focus()
      }
    }
  }

  const _setWatchValue = (key: FormKey<T>, value: string) => {
    if (!(watchUsedAll || watchUsed[key])) {
      return
    }
    setWatchValues((prev) => ({ ...prev, [key]: value }))
  }

  const register = (key: FormKey<T> | string) => ({
    name: String(key),
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      _setWatchValue(key as FormKey<T>, value)
      _focusNext(key as FormKey<T>, value)
    },
    ref: (element: HTMLInputElement | null) => {
      inputRef.current = { ...inputRef.current, [key]: element }
    },
    type: formOptions?.[key]?.type,
    defaultValue: formOptions ? formOptions[key]?.default : undefined,
  })

  const setValue = (key: FormKey<T>, value: unknown) => {
    if (inputRef.current[key]) {
      inputRef.current[key].value = value as string
    }
  }

  const watch = (key?: FormKey<T>) => {
    if (key) {
      watchUsed = { ...watchUsed, [key]: true }
      return watchValues[key]
    }
    watchUsedAll = true
    return makeFormValues<T>(watchValues, defaultValues)
  }

  const getValues = (key?: FormKey<T>) => {
    if (key) {
      return inputRef.current[key].value
    }
    const values: T = {} as T
    Object.keys(inputRef.current).forEach((formKey) => {
      const element = inputRef.current[formKey as FormKey<T>]
      if (element) {
        values[formKey as keyof T] = element.value
      }
    })
    return makeFormValues(values, defaultValues)
  }

  const handleSubmit = (submitFn: (formData: T) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault()
      submitFn(getValues())
    }
  }

  return { register, watch, setValue, getValues, handleSubmit }
}

export default useForm
