import { cardValidator } from "../domain";
import { useBlur } from "../hooks";
import Icon from "./Icon";
import Input from "./Input";
import ValidationMessage from "./ValidationMessage";

interface CardSecurityCodeInputProps {
  cardSecurityCode: string;
  handleCardSecurityCode: (value: string) => void;
}

const CardSecurityCodeInput = ({
  cardSecurityCode,
  handleCardSecurityCode,
}: CardSecurityCodeInputProps) => {
  const { blurred, handleBlur } = useBlur();

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          className="input-basic w-25"
          type="password"
          maxLength={cardValidator.securityCode.maxLength}
          value={cardSecurityCode}
          onChange={(e) => handleCardSecurityCode(e.target.value)}
          onBlur={handleBlur}
        />
        <Icon name="questionCircle" />
      </div>
      <ValidationMessage
        isValid={() => cardValidator.securityCode.check(cardSecurityCode)}
        errorMessage={cardValidator.securityCode.errorMessage}
        showOnBlur={blurred}
      />
    </div>
  );
};

export default CardSecurityCodeInput;
