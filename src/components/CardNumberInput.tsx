import { Fragment } from "react/jsx-runtime";
import Input from "./Input";
import ValidationMessage from "./ValidationMessage";
import { useBlur } from "../hooks";
import { cardValidator } from "../domain";

interface CardNumberInputProps {
  cardNumber: string[];
  handleCardNumber: (value: string, index: number) => void;
}

const CardNumberInput = ({
  cardNumber,
  handleCardNumber,
}: CardNumberInputProps) => {
  const { blurred, handleBlur } = useBlur();

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumber.map((value, index) => (
          <Fragment key={index}>
            {index > 0 && "-"}
            <Input
              className="input-basic"
              maxLength={4}
              type={index > 1 ? "password" : "text"}
              value={value}
              onChange={(e) => handleCardNumber(e.target.value, index)}
              onBlur={() =>
                cardValidator.number.check(cardNumber.slice(0, index + 1)) &&
                handleBlur()
              }
            />
          </Fragment>
        ))}
      </div>
      <ValidationMessage
        isValid={() => cardValidator.number.check(cardNumber)}
        errorMessage={cardValidator.number.errorMessage}
        showOnBlur={blurred}
      />
    </div>
  );
};

export default CardNumberInput;
