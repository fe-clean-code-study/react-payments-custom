import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useCardForm } from "../hooks";

describe("useCardForm 훅 테스트", () => {
  test("기본값으로 초기화되어야 한다.", () => {
    const { result } = renderHook(() => useCardForm());

    expect(result.current.cardInfo).toEqual({
      cardNumber: ["", "", "", ""],
      expiredMonth: "",
      expiredYear: "",
      userName: "",
      cardName: "",
      color: "",
      nickname: "",
      cardSecurityCode: "",
      cardPassword: ["", ""],
    });
  });

  test("카드 번호를 올바르게 업데이트해야 한다.", () => {
    const { result } = renderHook(() => useCardForm());

    act(() => {
      result.current.handleCardNumber("1234", 0);
    });

    expect(result.current.cardInfo.cardNumber).toEqual(["1234", "", "", ""]);
  });

  test("숫자가 아닌 값으로 카드 번호를 업데이트하면 업데이트가 되지 않는다.", () => {
    const { result } = renderHook(() => useCardForm());

    act(() => {
      result.current.handleCardNumber("abcd", 0);
    });

    expect(result.current.cardInfo.cardNumber).toEqual(["", "", "", ""]);
  });

  test("만료 월을 올바르게 업데이트해야 한다.", () => {
    const { result } = renderHook(() => useCardForm());

    act(() => {
      result.current.handleExpiredMonth("12");
    });

    expect(result.current.cardInfo.expiredMonth).toBe("12");
  });

  test("잘못된 만료 월로 업데이트하면 업데이트가 되지 않는다.", () => {
    const { result } = renderHook(() => useCardForm());

    act(() => {
      result.current.handleExpiredMonth("13");
    });

    expect(result.current.cardInfo.expiredMonth).toBe("");
  });

  test("사용자 이름을 올바르게 업데이트해야 한다.", () => {
    const { result } = renderHook(() => useCardForm());

    act(() => {
      result.current.handleUserName("John Doe");
    });

    expect(result.current.cardInfo.userName).toBe("John Doe");
  });

  test("카드 이름과 색상을 올바르게 업데이트해야 한다.", () => {
    const { result } = renderHook(() => useCardForm());

    act(() => {
      result.current.handleCardNameAndColor("Visa", "blue");
    });

    expect(result.current.cardInfo.cardName).toBe("Visa");
    expect(result.current.cardInfo.color).toBe("blue");
  });

  test("별명을 올바르게 업데이트해야 한다.", () => {
    const { result } = renderHook(() => useCardForm());

    act(() => {
      result.current.handleNickname("My Card");
    });

    expect(result.current.cardInfo.nickname).toBe("My Card");
  });
});
