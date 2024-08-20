import { TInputValues } from './type.ts'

// 깊은 복사를 위한 유틸리티 함수
const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

const makeFormValues = <T>(
  inputValues: TInputValues<T>,
  defaultValues = {} as T,
): T => {
  const keyLists = Object.keys(inputValues).map((key) => key.split('.'))
  const result: any = deepClone(defaultValues)

  keyLists.forEach((keyList) => {
    const lastKey = keyList.join('.')

    keyList.reduce((currentResult, key, index) => {
      if (index === keyList.length - 1) {
        currentResult[key] = inputValues[lastKey as keyof typeof inputValues]
      } else {
        const nextKeyIsNumeric = !isNaN(parseInt(keyList[index + 1], 10))
        if (!currentResult[key]) {
          currentResult[key] = nextKeyIsNumeric ? [] : {}
        }
      }

      return currentResult[key]
    }, result)
  })

  return result
}

export default makeFormValues
