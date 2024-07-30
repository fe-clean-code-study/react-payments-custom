import { useState } from "react";
import Input from "./Input";

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
      <div style={{ height: "10px", paddingTop: "5px" }}>
        {blurred && !cardNumber.every((number) => number.length === 4) && (
          <span className="input-title" style={{ color: "red" }}>
            카드 번호가 유효하지 않습니다.
          </span>
        )}
      </div>
    </div>
  );
};

export default CardNumberInput;
