export function isNumericString(str: string) {
  const regex = /^[0-9]+$/;
  return regex.test(str);
}
