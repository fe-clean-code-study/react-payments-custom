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
    <Flex
      justify="center"
      align="center"
      width="100%"
      className="input-container"
    >
      <Input
        variant="underline"
        className="w-75"
        placeholder={placeholder}
        value={nickname}
        maxLength={10}
        onChange={(e) => onNicknameChange(e.target.value)}
      />
    </Flex>
  );
};

export default CardNicknameInput;
