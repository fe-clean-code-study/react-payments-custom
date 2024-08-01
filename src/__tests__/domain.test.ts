import { describe, expect, test } from "vitest";
import { formatCardNumber, formatExpiredDate } from "../domain";

describe("formatCardNumber 함수 테스트", () => {
  test.each([
    {
      cardNumber: ["0000", "1111", "2222", "3333"],
      expected: "0000-1111-****-****",
    },
    { cardNumber: ["", "111", "", "33"], expected: "111-**" },
    { cardNumber: ["1234", "", "5678", ""], expected: "1234-****" },
    { cardNumber: ["", "", "", ""], expected: "" },
    { cardNumber: ["1234", "5678"], expected: "1234-5678" },
  ])(
    "카드 번호 배열($cardNumber)을 입력하면 빈 세그먼트를 제거하고, 세 번째 세그먼트부터 마스킹한 결과($expected)가 반환된다.",
    ({ cardNumber, expected }) => {
      const formattedCardNumber = formatCardNumber(cardNumber);

      expect(formattedCardNumber).toBe(expected);
    }
  );
});

describe("formatExpiredDate 함수 테스트", () => {
  test.each([
    { month: "", year: "21", expected: "MM/21" },
    { month: "12", year: "", expected: "12/YY" },
    { month: "05", year: "23", expected: "05/23" },
    { month: "", year: "", expected: "MM/YY" },
    { month: "1", year: "2", expected: "MM/YY" },
  ])(
    "월($month)과 년($year)을 입력하면 'MM/YY' 형식으로 포맷팅된 $expected를 반환한다",
    ({ month, year, expected }) => {
      const formattedExpiredDate = formatExpiredDate(month, year);

      expect(formattedExpiredDate).toBe(expected);
    }
  );
});
