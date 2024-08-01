import { Flex, Input } from "../common";

interface CardNicknameInputProps {
  placeholder: string;
  nickname: string;
  onNicknameChange: (value: string) => void;
}

const CardNicknameInput = ({
  placeholder,
  nickname,
  onNicknameChange,
}: CardNicknameInputProps) => {
  return (
    <Flex justify="center" align="center" className="input-container w-100">
      <Input
        className="input-underline w-75"
        placeholder={placeholder}
        value={nickname}
        maxLength={10}
        onChange={(e) => onNicknameChange(e.target.value)}
      />
    </Flex>
  );
};

export default CardNicknameInput;
