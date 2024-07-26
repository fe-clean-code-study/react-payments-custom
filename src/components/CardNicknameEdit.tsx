import { CardInfo } from "../types";
import Button from "./Button";
import Card from "./Card";

interface CardNicknameEditProps {
  title: string;
  placeholder: string;
  cardInfo: Omit<CardInfo, "id">;
  onChangeNickname: (value: string) => void;
  onConfirm: () => void;
}

function CardNicknameEdit({
  title,
  placeholder,
  cardInfo,
  onChangeNickname,
  onConfirm,
}: CardNicknameEditProps) {
  const {
    cardNumber,
    expiredMonth,
    expiredYear,
    userName,
    cardName,
    color,
    nickname,
  } = cardInfo;

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">{title}</h2>
      </div>
      <Card
        type="filled"
        size="big"
        cardName={cardName}
        cardNumber={cardNumber}
        userName={userName}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        nickname={nickname}
        color={color}
      />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder={placeholder}
          value={cardName === nickname ? "" : nickname}
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
        {/* <span className="button-text pointer" onClick={onConfirm}>
          확인
        </span> */}
      </div>
    </div>
  );
}

export default CardNicknameEdit;
