import { renderHook, act } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import useFocusNext from ".";

describe("useFocusNext", () => {
  test("조건이 충족되면 다음 입력 요소로 포커스를 이동시킨다.", async () => {
    const order = ["input1", "input2", "input3"];
    const { result } = renderHook(() => useFocusNext(order));

    const input1 = document.createElement("input");
    input1.name = "input1";
    const input2 = document.createElement("input");
    input2.name = "input2";

    document.body.appendChild(input1);
    document.body.appendChild(input2);

    await act(async () => {
      result.current.register(input1);
      result.current.register(input2);
    });

    const shouldMoveFocus = vi.fn().mockReturnValue(true);

    await act(async () => {
      result.current.focusNext(input1, shouldMoveFocus);
    });

    expect(document.activeElement).toBe(input2);

    document.body.removeChild(input1);
    document.body.removeChild(input2);
  });

  test("조건이 충족되지 않으면 포커스를 이동시키지 않는다.", async () => {
    const order = ["input1", "input2", "input3"];
    const { result } = renderHook(() => useFocusNext(order));

    const input1 = document.createElement("input");
    input1.name = "input1";
    const input2 = document.createElement("input");
    input2.name = "input2";

    document.body.appendChild(input1);
    document.body.appendChild(input2);

    await act(async () => {
      result.current.register(input1);
      result.current.register(input2);
    });

    const shouldMoveFocus = vi.fn().mockReturnValue(false);

    await act(async () => {
      result.current.focusNext(input1, shouldMoveFocus);
    });

    expect(document.activeElement).not.toBe(input2);

    document.body.removeChild(input1);
    document.body.removeChild(input2);
  });
});
