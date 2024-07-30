import { useState } from "react";
import Input from "./Input";
import ValidationMessage from "./ValidationMessage";

interface CardNumberInputProps {
  cardNumber: string[];
  handleCardNumber: (value: string, index: number) => void;
}

const CardNumberInput = ({
  cardNumber,
  handleCardNumber,
}: CardNumberInputProps) => {
  const [blurred, setBlurred] = useState(false);

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <Input
          className="input-basic"
          maxLength={4}
          value={cardNumber[0]}
          onChange={(e) => handleCardNumber(e.target.value, 0)}
          onBlur={() => {
            setBlurred(true);
          }}
        />
        -
        <Input
          className="input-basic"
          maxLength={4}
          value={cardNumber[1]}
          onChange={(e) => handleCardNumber(e.target.value, 1)}
          onBlur={() => {
            setBlurred(true);
          }}
        />
        -
        <Input
          className="input-basic"
          type="password"
          maxLength={4}
          value={cardNumber[2]}
          onChange={(e) => handleCardNumber(e.target.value, 2)}
          onBlur={() => {
            setBlurred(true);
          }}
        />
        -
        <Input
          className="input-basic"
          type="password"
          maxLength={4}
          value={cardNumber[3]}
          onChange={(e) => handleCardNumber(e.target.value, 3)}
          onBlur={() => {
            setBlurred(true);
          }}
        />
      </div>
      <ValidationMessage
        isValid={() => !cardNumber.every((number) => number.length === 4)}
        errorMessage="카드 번호가 유효하지 않습니다."
        showOnBlur={blurred}
      />
    </div>
  );
};

export default CardNumberInput;
