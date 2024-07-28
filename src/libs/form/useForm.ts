import React, {
  useRef,
  useState,
  HTMLInputTypeAttribute,
  HTMLAttributes
} from "react";

import { FormKey } from "./formKeyType.ts";
import makeFormValues from "./makeFormValues.ts";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

interface IFormData {
  [key: string]: unknown;
}
export interface IFormOptions<T> {
  [key: FormKey<T>]: {
    type?: HTMLInputTypeAttribute;
    default?: unknown;
    check?: (value: unknown) => boolean;
    nextField?: FormKey<T>;
  }
}

const useForm = <T extends IFormData>(formOptions?: IFormOptions<T>) => {
  type TInputRef = Record<FormKey<T>, HTMLInputElement | null>;
  type TInputValues = Record<FormKey<T>, string>
  type TWatchUsed = Record<FormKey<T>, boolean>;

  const inputRef = useRef<TInputRef>({} as TInputRef);
  const [watchValues, setWatchValues] = useState<TInputValues>({} as TInputValues);

  let watchUsedAll = false;
  let watchUsed= {} as TWatchUsed;

  const _focusNext = (key: FormKey<T>, value: string) => {
    if (formOptions && formOptions[key] && formOptions[key].check && formOptions[key].check(value)) {
      const nextField = formOptions[key].nextField;
      if (nextField && inputRef.current[nextField]) {
        inputRef.current[nextField].focus();
      }
    }
  };

  const _setWatchValue = (key: FormKey<T>, value: string) => {
    if (!(watchUsedAll || watchUsed[key])) {
      return
    }
    setWatchValues((prev) => ({ ...prev, [key]: value }));
  };

  const register = (key: FormKey<T> | string): Pick<HTMLAttributes<HTMLInputElement>, 'name' | 'onChange' | 'ref' | 'type' | 'defaultValue'> => ({
    name: String(key),
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      _setWatchValue(key as FormKey<T>, value);
      _focusNext(key as FormKey<T>, value);
    },
    ref: (element: HTMLInputElement | null) => {
      inputRef.current = {...inputRef.current, [key] : element};
    },
    type: formOptions ? formOptions[key]?.type : undefined,
    defaultValue: formOptions ? formOptions[key]?.default : undefined
  });

  const setValue = (key: FormKey<T>, value: unknown) => {
    if (inputRef.current[key]) {
      inputRef.current[key].value = value as string;
    }
  };

  const watch = (key?: FormKey<T>) => {
    if (key) {
      watchUsed = {...watchUsed, [key] : true}
      return watchValues[key];
    }
    watchUsedAll = true;
    return makeFormValues(watchValues)
  };

  const getValues = (key?: FormKey<T>) => {
    if (key) {
      return inputRef.current[key].value
    }
    const values: T = {} as T;
    Object.keys(inputRef.current).forEach((formKey) => {
      const element = inputRef.current[formKey as FormKey<T>];
      if (element) {
        values[formKey as keyof T] = element.value;
      }
    })
    return makeFormValues(values)
  };

  const handleSubmit = (submitFn: (formData: T) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault()
      submitFn(getValues())
    }
  }

  return { register, watch, setValue, getValues, handleSubmit };
};

export default useForm;
