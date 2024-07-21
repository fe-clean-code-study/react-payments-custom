import { describe, expect, test } from "vitest";
import App from "../components/Example.tsx";
import { render } from "@testing-library/react";

describe('간단한 컴포넌트 테스트', () => {
  test('App 컴포넌트가 가 렌더링 된다.', () => {
    const { getByText } = render(<App />)

    expect(getByText('1️⃣ 카드 추가')).toBeInTheDocument();
    expect(getByText('2️⃣ 카드 추가 - 카드사 선택')).toBeInTheDocument();
    expect(getByText('3️⃣ 카드 추가 - 입력 완료')).toBeInTheDocument();
    expect(getByText('4️⃣ 카드 추가 완료')).toBeInTheDocument();
    expect(getByText('5️⃣ 카드 목록')).toBeInTheDocument();
  })
})
