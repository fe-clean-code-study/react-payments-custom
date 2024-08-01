import { CardInfo } from "../types";
import { Card } from "./card";
import { Button, Input, Title } from "./common";

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
    <div className="app flex-column-center">
      <div className="flex-center">
        <Title level={2} className="page-title mb-10">
          {title}
        </Title>
      </div>
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
      <div className="input-container flex-center w-100">
        <Input
          className="input-underline w-75"
          placeholder={placeholder}
          value={nickname}
          maxLength={10}
          onChange={(e) => onChangeNickname(e.target.value)}
        />
      </div>
      <div
        className="button-box"
        style={{
          position: "absolute",
          bottom: "25px",
          right: "33px",
        }}
      >
        <Button className="button-text" onClick={onConfirm}>
          확인
        </Button>
      </div>
    </div>
  );
};

export default CardNicknameEdit;
