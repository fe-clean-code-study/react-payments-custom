import { cardValidator } from "../../domain";
import { useBlur, useFocusNext } from "../../hooks";
import { filterDigits } from "../../utils";
import { Flex, Input, ValidationMessage } from "../common";

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
      <Flex gap="5px">
        {cardPassword.map((value, index) => (
          <Input
            key={index}
            type="password"
            maxLength={cardValidator.password.maxLength}
            value={value}
            name={`pw${index + 1}`}
            onChange={(e) => {
              handleCardPassword(e.target.value, index);

              focusNext(e.target, (value) => filterDigits(value).length === 1);
            }}
            onBlur={(e) => e.target.value.length !== 1 && handleBlur()}
            ref={register}
            style={{
              width: "15%",
              color: value.length === 1 ? "royalblue" : "",
            }}
          />
        ))}
        <Flex justify="center" align="center" width="15%">
          •
        </Flex>
        <Flex justify="center" align="center" width="15%">
          •
        </Flex>
      </Flex>
      <ValidationMessage
        isValid={() => cardValidator.password.check(cardPassword)}
        errorMessage={cardValidator.password.errorMessage}
        showOnBlur={blurred}
      />
    </div>
  );
};

export default CardPasswordInput;
