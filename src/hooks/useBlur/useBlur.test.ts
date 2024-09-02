import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useBlur from ".";

describe("useBlur 훅 테스트", () => {
  test("기본적으로 false로 초기화되어야 한다.", () => {
    const { result } = renderHook(() => useBlur());

    expect(result.current.blurred).toBe(false);
  });

  test("초깃값을 할당하면 해당 값으로 초기화되어야 한다.", () => {
    const { result } = renderHook(() => useBlur(true));

    expect(result.current.blurred).toBe(true);
  });

  test("handleBlur가 호출되면 blurred가 true로 설정되어야 한다.", async () => {
    const { result } = renderHook(() => useBlur());

    await act(async () => {
      result.current.handleBlur();
    });

    expect(result.current.blurred).toBe(true);
  });

  test("resetBlur가 호출되면 blurred가 true로 설정되어야 한다.", async () => {
    const { result } = renderHook(() => useBlur());

    await act(async () => {
      result.current.resetBlur();
    });

    expect(result.current.blurred).toBe(false);
  });
});
