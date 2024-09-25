import { describe, test, expect } from 'vitest';

import { generateID } from '~/shared/utils';

describe('generateID 함수 테스트', () => {
  test('generateID 함수는 7자리 문자열을 반환한다.', () => {
    const id = generateID();
    expect(id.length).toBe(7);
  });

  test('generateID 함수는 문자열을 반환한다.', () => {
    const id = generateID();
    expect(typeof id).toBe('string');
  });
});
