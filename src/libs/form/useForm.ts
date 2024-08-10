import React, { useRef, useState } from 'react'
import makeFormValues from './makeFormValues'
import {
  FormKey,
  IFormOptions,
  TInputRef,
  TInputValues,
  TWatchUsed,
  UseFormReturnType,
} from './type'

interface UseFormParams<T> {
  formOptions?: IFormOptions<T>
  defaultValues?: T
}

const useForm = <T extends Record<never, unknown>>({
  formOptions,
  defaultValues,
}: UseFormParams<T> = {}): UseFormReturnType<T> => {
  const inputRef = useRef<TInputRef<T>>({} as TInputRef<T>)
  const [watchValues, setWatchValues] = useState<TInputValues<T>>(
    {} as TInputValues<T>,
  )
  const values = useRef<TInputValues<T>>({} as TInputValues<T>)

  let watchUsedAll = false
  let watchUsed = {} as TWatchUsed<T>

  const focusNextField = (key: FormKey<T>, value: string) => {
    if (formOptions?.[key]?.check?.(value)) {
      const nextField = formOptions[key].nextField
      if (nextField && inputRef.current[nextField]) {
        inputRef.current[nextField].focus()
      }
    }
  }

  const updateValue = (key: FormKey<T>, value: string) => {
    values.current[key] = value
    if (watchUsedAll || watchUsed[key]) {
      setWatchValues((prev) => ({ ...prev, [key]: value }))
    }
  }

  const register = (key: FormKey<T> | string) => {
    const formKey = key as FormKey<T>
    return {
      name: String(formKey),

      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        updateValue(formKey, value)
        focusNextField(formKey, value)
      },

      ref: (element: HTMLInputElement | null) => {
        inputRef.current = { ...inputRef.current, [formKey]: element }
      },

      type: formOptions?.[formKey]?.type,
      defaultValue: formOptions?.[formKey]?.default,
    }
  }

  const setValue = (key: FormKey<T>, value: string) => {
    if (inputRef.current[key]) {
      inputRef.current[key].setAttribute('value', value)
      inputRef.current[key].dispatchEvent(
        new Event('change', { bubbles: true }),
      )
    }
  }

  const watch = (key: FormKey<T>) => {
    watchUsed = { ...watchUsed, [key]: true }
    return watchValues[key]
  }

  const watchAll = () => {
    watchUsedAll = true
    return makeFormValues<T>(watchValues, defaultValues)
  }

  const getValue = (key: FormKey<T>) => {
    return inputRef.current[key]?.value ?? ''
  }

  const getValues = () => {
    return makeFormValues(values.current, defaultValues)
  }

  const handleSubmit = (submitFn: (formData: T) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault()
      submitFn(getValues())
    }
  }

  return {
    register,
    watch,
    watchAll,
    setValue,
    getValue,
    getValues,
    handleSubmit,
  }
}

export default useForm
