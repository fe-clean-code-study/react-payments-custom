const formatCardNumber = (cardNumber: string[]) => {
  return cardNumber
    .map((num, idx) => (idx > 1 ? "*".repeat(num.length) : num))
    .filter((num) => num.length > 0)
    .join("-");
};

export default formatCardNumber;
