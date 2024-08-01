import { describe, expect, test } from "vitest";
import { getRandomId } from "../utils";

describe("getRandomId 함수 테스트", () => {
  test.each([
    { length: 5, expected: 5 },
    { length: 3, expected: 3 },
    { length: 7, expected: 7 },
  ])("길이$length의 무작위 ID를 가져온다.", ({ length, expected }) => {
    const id = getRandomId(length);

    expect(id.length).toBe(expected);
  });

  test("숫자 혹은 알파벳 대소문자들로 이루어진 ID를 가져온다.", () => {
    const id = getRandomId(5);
    const regex = /^[0-9a-zA-Z]{5}$/;

    expect(id).toMatch(regex);
  });
});
