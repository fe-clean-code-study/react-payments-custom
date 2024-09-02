import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useTooltip from ".";

describe("useTooltip 훅 테스트", () => {
  test("기본적으로 false인 상태로 초기화되어야 한다.", () => {
    const { result } = renderHook(() => useTooltip());

    expect(result.current.isShow).toBe(false);
  });

  test("initialState가 true일 때 열린 상태로 초기화되어야 한다.", () => {
    const { result } = renderHook(() => useTooltip(true));

    expect(result.current.isShow).toBe(true);
  });

  test("show를 호출되면 isShow이 true가 된다.", async () => {
    const { result } = renderHook(() => useTooltip());

    await act(async () => {
      result.current.show();
    });

    expect(result.current.isShow).toBe(true);
  });

  test("hide가 호출되면 isShow이 false가 된다.", async () => {
    const { result } = renderHook(() => useTooltip());

    await act(async () => {
      result.current.hide();
    });

    expect(result.current.isShow).toBe(false);
  });
});
