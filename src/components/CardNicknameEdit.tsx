import { CardInfo } from "../types";
import { Card, CardNicknameInput } from "./card";
import { Button, Flex, Title } from "./common";

interface CardNicknameEditProps {
  title: string;
  placeholder: string;
  cardInfo: Omit<CardInfo, "id">;
  nickname: string;
  onChangeNickname: (value: string) => void;
  onConfirm: () => void;
}

const CardNicknameEdit = ({
  title,
  placeholder,
  cardInfo,
  nickname,
  onChangeNickname,
  onConfirm,
}: CardNicknameEditProps) => {
  const { cardNumber, expiredMonth, expiredYear, userName, cardName, color } =
    cardInfo;

  return (
    <Flex direction="column" justify="center" align="center" className="app">
      <Flex justify="center" align="center">
        <Title level={2} className="page-title mb-10">
          {title}
        </Title>
      </Flex>

      <Card
        type="filled"
        size="big"
        cardName={cardName}
        cardNumber={cardNumber}
        userName={userName}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        nickname=""
        color={color}
      />
      <CardNicknameInput
        placeholder={placeholder}
        nickname={nickname}
        onNicknameChange={onChangeNickname}
      />
      <div className="button-box">
        <Button className="button-text" onClick={onConfirm}>
          확인
        </Button>
      </div>
    </Flex>
  );
};

export default CardNicknameEdit;
