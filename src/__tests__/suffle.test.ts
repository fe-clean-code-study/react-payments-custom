import { describe, test, expect } from 'vitest';

import suffle from '~/utils/suffle';

describe('suffle 함수 테스트', () => {
  test('suffle 함수는 배열을 무작위로 섞어서 반환한다.', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = suffle(arr);
    expect(result).not.toBe(arr);
  });

  test('suffle 함수는 배열의 길이를 유지한다.', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = suffle(arr);
    expect(result.length).toBe(arr.length);
  });

  test('suffle 함수는 배열안에 들어있는 요소를 삭제하거나 추가하지 않는다.', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = suffle(arr);

    expect(result.every((value) => arr.includes(value))).toBe(true);
  });
});
