import Input from "./Input";
import ValidationMessage from "./ValidationMessage";
import { useBlur } from "../hooks";
import { cardValidator } from "../domain";

interface CardExpiryInputProps {
  expiredMonth: string;
  expiredYear: string;
  handleExpiredMonth: (value: string) => void;
  handleExpiredYear: (value: string) => void;
}

const CardExpiryInput = ({
  expiredMonth,
  expiredYear,
  handleExpiredMonth,
  handleExpiredYear,
}: CardExpiryInputProps) => {
  const { blurred, handleBlur } = useBlur();

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <Input
          className="input-basic"
          placeholder="MM"
          min={1}
          max={12}
          maxLength={cardValidator.expiry.maxLength}
          value={expiredMonth}
          onChange={(e) => handleExpiredMonth(e.target.value)}
          onBlur={handleBlur}
        />
        /
        <Input
          className="input-basic"
          placeholder="YY"
          maxLength={cardValidator.expiry.maxLength}
          value={expiredYear}
          onChange={(e) => handleExpiredYear(e.target.value)}
          onBlur={handleBlur}
        />
      </div>
      <ValidationMessage
        isValid={() => cardValidator.expiry.check(expiredMonth, expiredYear)}
        errorMessage={cardValidator.expiry.errorMessage}
        showOnBlur={blurred}
      />
    </div>
  );
};

export default CardExpiryInput;
