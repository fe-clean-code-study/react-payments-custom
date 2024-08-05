import { HTMLInputTypeAttribute } from "react";

export type FormKey<ObjectType> = ObjectType extends object
  ? {
    [PropertyName in keyof ObjectType]: ObjectType[PropertyName] extends Array<infer ItemType>
      ? ItemType extends object
        ? `${PropertyName & string}.${number}.${FormKey<ItemType>}`
        : `${PropertyName & string}.${number}`
      : ObjectType[PropertyName] extends object | undefined
        ? `${PropertyName & string}.${FormKey<ObjectType[PropertyName]>}`
        : PropertyName
  }[keyof ObjectType]
  : never;


export type TInputRef<T> = Record<FormKey<T>, HTMLInputElement | null>;

export type TInputValues<T> = Record<FormKey<T>, string>;

export type TWatchUsed<T> = Record<FormKey<T>, boolean>;

export interface IFormData {
  [key: string]: unknown;
}

export interface IFormOptions<T> {
  [key: FormKey<T>]: {
    type?: HTMLInputTypeAttribute;
    default?: unknown;
    check?: (value: unknown) => boolean;
    nextField?: FormKey<T>;
  };
}

export interface UseFormReturnType<T> {
  register: (key: FormKey<T> | string) => {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ref: (element: HTMLInputElement | null) => void;
    type?: string;
    defaultValue?: string;
  };
  watch: (key?: FormKey<T>) => typeof key extends undefined ? T : string;
  setValue: (key: FormKey<T>, value: unknown) => void;
  getValues: (key?: FormKey<T>) => string | T;
  handleSubmit: (submitFn: (formData: T) => void) => (e: React.FormEvent) => void;
}
