const cardValidator = {
  number: {
    check: (cardNumber: string[]) =>
      !cardNumber.every((number) => number.length === 4),
    errorMessage: "카드 번호가 유효하지 않습니다.",
  },
};

export default cardValidator;
