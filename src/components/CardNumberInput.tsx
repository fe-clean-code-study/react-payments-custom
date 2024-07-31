import { Fragment } from "react/jsx-runtime";
import Input from "./Input";
import ValidationMessage from "./ValidationMessage";
import { useBlur, useFocusNext } from "../hooks";
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
  const { register, focusNext } = useFocusNext([
    "num1",
    "num2",
    "num3",
    "num4",
  ]);

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumber.map((value, index) => (
          <Fragment key={index}>
            {index > 0 && "-"}
            <Input
              className="input-basic"
              maxLength={cardValidator.number.maxLength}
              type={index > 1 ? "password" : "text"}
              value={value}
              name={`num${index + 1}`}
              onChange={(e) => {
                handleCardNumber(e.target.value, index);

                focusNext(e.target, (value) => value?.length === 4);
              }}
              onBlur={(e) => e.target.value.length !== 4 && handleBlur()}
              ref={register}
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
