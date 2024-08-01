const isPositiveInteger = (value: string, max?: number) => {
  const num = Number(value);
  return Number.isInteger(num) && num >= 0 && (max === undefined || num <= max);
};

export default isPositiveInteger;
