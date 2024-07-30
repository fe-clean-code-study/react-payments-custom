import Input from "./Input";
import ValidationMessage from "./ValidationMessage";
import { useBlur } from "../hooks";

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
        <span className="input-title">{username.length}/30</span>
      </div>
      <Input
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={30}
        value={username}
        onChange={(e) => handleUsername(e.target.value)}
        onBlur={handleBlur}
      />
      <ValidationMessage
        isValid={() => username.length < 1}
        errorMessage="카드 소유자 이름을 입력해주세요."
        showOnBlur={blurred}
      />
    </div>
  );
};

export default CardUsernameInput;
