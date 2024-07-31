const cardValidator = {
  number: {
    check: (cardNumber: string[]) =>
      !cardNumber.every((number) => number.length === 4),
    errorMessage: "카드 번호가 유효하지 않습니다.",
    maxLength: 4,
  },
  username: {
    check: (username: string) => username.length < 1,
    errorMessage: "카드 소유자 이름을 입력해주세요.",
    maxLength: 30,
  },
  expiry: {
    check: (month: string, year: string) =>
      month.length !== 2 || year.length !== 2,
    errorMessage: "카드 만료일이 유효하지 않습니다.",
    maxLength: 2,
  },
  securityCode: {
    check: (code: string) => code.length !== 3,
    errorMessage: "보안 코드가 유효하지 않습니다.",
    maxLength: 3,
  },
  password: {
    check: (password: string[]) => !password.every((word) => word.length === 1),
    errorMessage: "카드 비밀번호를 입력해주세요.",
    maxLength: 1,
  },
};

export default cardValidator;
