import Input from "./Input";
import ValidationMessage from "./ValidationMessage";
import { useBlur, useFocusNext } from "../hooks";
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
  const { register, focusNext } = useFocusNext(["month", "year"]);

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
          name="month"
          value={expiredMonth}
          onChange={(e) => {
            handleExpiredMonth(e.target.value);

            focusNext(e.target, (value) => value?.length === 2);
          }}
          onBlur={(e) => e.target.value.length !== 2 && handleBlur()}
          ref={register}
        />
        /
        <Input
          className="input-basic"
          placeholder="YY"
          maxLength={cardValidator.expiry.maxLength}
          value={expiredYear}
          name="year"
          onChange={(e) => handleExpiredYear(e.target.value)}
          onBlur={handleBlur}
          ref={register}
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
