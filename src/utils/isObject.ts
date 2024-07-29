export const isObject = (value: unknown): value is object | Function => {
  if (value === null || value === undefined) {
    return false;
  }

  const type = typeof value;
  if (type !== "object" && type !== "function") {
    return false;
  }

  return (
    Object.getPrototypeOf(value) === Object.prototype ||
    Object.getPrototypeOf(value) === Function.prototype ||
    Object.getPrototypeOf(value) === null
  );
};
