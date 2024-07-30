import { useState } from "react";
import Input from "./Input";

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
  const [blurred, setBlurred] = useState(false);

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <Input
          className="input-basic"
          placeholder="MM"
          min={1}
          max={12}
          maxLength={2}
          value={expiredMonth}
          onChange={(e) => handleExpiredMonth(e.target.value)}
          onBlur={() => setBlurred(true)}
        />
        /
        <Input
          className="input-basic"
          placeholder="YY"
          maxLength={2}
          value={expiredYear}
          onChange={(e) => handleExpiredYear(e.target.value)}
          onBlur={() => setBlurred(true)}
        />
      </div>
      <div style={{ height: "10px", paddingTop: "5px" }}>
        {blurred && (expiredMonth.length !== 2 || expiredYear.length !== 2) && (
          <span className="input-title" style={{ color: "red" }}>
            카드 번호가 유효하지 않습니다.
          </span>
        )}
      </div>
    </div>
  );
};

export default CardExpiryInput;
