import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useModal } from "../hooks";

describe("useModal 훅 테스트", () => {
  test("기본적으로 닫힌 상태로 초기화되어야 한다", () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBe(false);
  });

  test("defaultOpen이 true일 때 열린 상태로 초기화되어야 한다", () => {
    const { result } = renderHook(() => useModal(true));

    expect(result.current.isOpen).toBe(true);
  });

  test("onOpen이 호출되면 모달이 열려야 한다", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toBe(true);
  });

  test("onClose가 호출되면 모달이 닫혀야 한다", () => {
    const { result } = renderHook(() => useModal(true));

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
