import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useModal } from '~/hooks';

describe('useModal 훅 테스트', () => {
  test('useModal 훅은 isOpen, setIsOpen, close, open 함수를 반환한다.', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current).toHaveProperty('isOpen');
    expect(result.current).toHaveProperty('setIsOpen');
    expect(result.current).toHaveProperty('close');
    expect(result.current).toHaveProperty('open');
  });

  test('useModal 훅은 isOpen의 기본값을 false로 가진다.', () => {
    const { result } = renderHook(() => useModal());
    const { isOpen } = result.current;

    expect(isOpen).toBe(false);
  });

  test('useModal의 파라미터로 isOpen의 초기값을 전달할 수 있다.', () => {
    const { result } = renderHook(() => useModal(true));
    const { isOpen } = result.current;

    expect(isOpen).toBe(true);
  });

  test('useModal의 open 함수를 호출하면 isOpen이 true로 변경된다.', () => {
    const { result } = renderHook(() => useModal(false));

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);
  });

  test('useModal의 close함수를 호출하면 isOpen이 false로 변경된다.', () => {
    const { result } = renderHook(() => useModal(true));

    act(() => {
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);
  });

  test('useModal의 setIsOpen 함수를 호출하면 isOpen이 전달된 값으로 변경된다.', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.setIsOpen(true);
    });
    expect(result.current.isOpen).toBe(true);
  });
});
