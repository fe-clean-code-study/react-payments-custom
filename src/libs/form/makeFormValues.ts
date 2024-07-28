import {FormKey} from "./type.ts";
const makeFormValues = <T>(inputValues: Record<FormKey<T>, string>, defaultValues = {} as T)=> {
  const keyLists = Object.keys(inputValues).map(key => key.split('.'))
  const result = {...defaultValues};

  keyLists.forEach(keyList => {
    const lastKey = keyList.join('.')

    keyList.reduce((currentResult, key, index) => {
      if (index === keyList.length - 1) {
        currentResult[key] = inputValues[lastKey];
      } else {
        const nextKeyIsNumeric = !isNaN(parseInt(keyList[index + 1], 10));
        if (!currentResult[key]) {
          currentResult[key] = nextKeyIsNumeric ? [] : {};
        }
      }

      return currentResult[key];
    }, result);
  });

  return result
}

export default makeFormValues