import {ICard} from "../../app/payments/type.ts";

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
