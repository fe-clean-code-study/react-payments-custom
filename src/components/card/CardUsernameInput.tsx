import { useBlur } from "../../hooks";
import { cardValidator } from "../../domain";
import { Input, ValidationMessage } from "../common";

interface CardUsernameInputProps {
  username: string;
  handleUsername: (value: string) => void;
}

const CardUsernameInput = ({
  username,
  handleUsername,
}: CardUsernameInputProps) => {
  const { blurred, handleBlur } = useBlur();

  return (
    <div className="input-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="input-title">카드 소유자 이름</span>
        <span className="input-title">
          {username.length}/{cardValidator.username.maxLength}
        </span>
      </div>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={cardValidator.username.maxLength}
        value={username}
        onChange={(e) => handleUsername(e.target.value)}
        onBlur={handleBlur}
        style={{ color: username.length > 0 ? "royalblue" : "" }}
      />
      <ValidationMessage
        isValid={() => cardValidator.username.check(username)}
        errorMessage={cardValidator.username.errorMessage}
        showOnBlur={blurred}
      />
    </div>
  );
};

export default CardUsernameInput;
