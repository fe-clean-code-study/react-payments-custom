import React, {useRef, useState} from "react";

interface FormData {
  [key: string]: unknown
}


const useForm = <T extends FormData>(order?: Array<keyof T>) => {
  type TInputRef = Record<keyof T, HTMLInputElement|null>
  type TInputValues = T
  type TWatchUsed = Record<keyof T, boolean>

  let watchUsedAll = false
  let watchUsed: TWatchUsed = {}

  const inputRef = useRef<TInputRef>({} as TInputRef);
  const [values, setValues] = useState<TInputValues>({} as TInputValues);
  const register = (key: keyof T) => ({
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      // 1. focus 조정
      if (event.target.value.length >= 3 && order) {
        // 다음 키값 찾기
        const currentIndex = order.findIndex(orderKey => orderKey === key)
        const nextIndex = currentIndex + 1
        const nextKey = order[nextIndex]
        if (nextIndex < order.length) {
          inputRef.current[nextKey].focus()
        }
      }
      // 2. watch 를 호출했다면 setValue
      if (watchUsed[key] || watchUsedAll){
        setValues((prev) => ({ ...prev, [key]: event.target.value }));
      }
    },
    ref: (element: HTMLInputElement | null) => {
      inputRef.current[key] = element;
    }
  });

  const watch = (key?: keyof T) => {
    if (key) {
      watchUsed = { ...watchUsed, [key]: true }
      return values[key]
    } else {
      watchUsedAll = true
      return values
    }
  }

  return { register, watch };
}



export default function Form() {
  const { register, watch } = useForm<{
    input1: string;
    input2: string;
    input3: string;
  }>(['input1', 'input2', 'input3']);


  return (
    <div>
      <form>
        <input placeholder="input1" {...register("input1")} />
        <input placeholder="input2" {...register("input2")} />
        <input placeholder="input3" {...register("input3")} />
      </form>
      <hr />
      <div>input1 : {watch("input1")}</div>
      <div>input2 : {watch("input2")}</div>
      <div>input3 : {watch("input3")}</div>
    </div>
  );
}
