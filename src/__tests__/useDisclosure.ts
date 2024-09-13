import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useDisclosure } from '~/shared/hooks';

describe('useDisclosure 훅 테스트', () => {
  test('useDisclosure 훅은 isOpen, setIsOpen, close, open 함수를 반환한다.', () => {
    const { result } = renderHook(() => useDisclosure());

    expect(result.current).toHaveProperty('isOpen');
    expect(result.current).toHaveProperty('setIsOpen');
    expect(result.current).toHaveProperty('close');
    expect(result.current).toHaveProperty('open');
  });

  test('useDisclosure 훅은 isOpen의 기본값을 false로 가진다.', () => {
    const { result } = renderHook(() => useDisclosure());
    const { isOpen } = result.current;

    expect(isOpen).toBe(false);
  });

  test('useModal의 파라미터로 isOpen의 초기값을 전달할 수 있다.', () => {
    const { result } = renderHook(() => useDisclosure({ initialOpen: true }));
    const { isOpen } = result.current;

    expect(isOpen).toBe(true);
  });

  test('useModal의 open 함수를 호출하면 isOpen이 true로 변경된다.', () => {
    const { result } = renderHook(() => useDisclosure({ initialOpen: false }));

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);
  });

  test('useModal의 close함수를 호출하면 isOpen이 false로 변경된다.', () => {
    const { result } = renderHook(() => useDisclosure({ initialOpen: false }));

    act(() => {
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
