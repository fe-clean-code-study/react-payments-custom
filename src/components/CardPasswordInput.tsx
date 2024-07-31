import { cardValidator } from "../domain";
import { useBlur, useFocusNext } from "../hooks";
import Input from "./Input";
import ValidationMessage from "./ValidationMessage";

interface CardPasswordInputProps {
  cardPassword: string[];
  handleCardPassword: (value: string, index: number) => void;
}

const CardPasswordInput = ({
  cardPassword,
  handleCardPassword,
}: CardPasswordInputProps) => {
  const { blurred, handleBlur } = useBlur();
  const { register, focusNext } = useFocusNext(["pw1", "pw2"]);

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div style={{ display: "flex", gap: "5px" }}>
        {cardPassword.map((value, index) => (
          <Input
            className="input-basic w-15"
            type="password"
            maxLength={cardValidator.password.maxLength}
            value={value}
            name={`pw${index + 1}`}
            onChange={(e) => {
              handleCardPassword(e.target.value, index);

              focusNext(e.target, (value) => value?.length === 1);
            }}
            onBlur={(e) => e.target.value.length !== 1 && handleBlur()}
            ref={register}
            style={{ color: value.length === 1 ? "royalblue" : "" }}
          />
        ))}
        <div className="flex-center w-15">•</div>
        <div className="flex-center w-15">•</div>
      </div>
      <ValidationMessage
        isValid={() => cardValidator.password.check(cardPassword)}
        errorMessage={cardValidator.password.errorMessage}
        showOnBlur={blurred}
      />
    </div>
  );
};

export default CardPasswordInput;
