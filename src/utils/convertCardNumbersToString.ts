export function convertCardNumbersToString([
  first = [],
  second = [],
  third = [],
  fourth = [],
]: number[][]): string {
  return [
    first.join(''),
    second.join(''),
    third.map(() => '*').join(''),
    fourth.map(() => '*').join(''),
  ].join(' ');
}
