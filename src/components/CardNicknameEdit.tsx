import { useCardForm } from "../hooks";
import Card from "./Card";

interface CardNicknameEditProps {
  cardForm: ReturnType<typeof useCardForm>;
  onConfirm: () => void;
}

function CardNicknameEdit({ cardForm, onConfirm }: CardNicknameEditProps) {
  const {
    cardNumber,
    expiredMonth,
    expiredYear,
    userName,
    cardName,
    color,
    nickname,
    handleNickname,
  } = cardForm;

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
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
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          value={nickname}
          onChange={(e) => handleNickname(e.target.value)}
        />
      </div>
      <div
        className="button-box"
        style={{
          position: "absolute",
          bottom: "25px",
          right: "25px",
        }}
      >
        <span className="button-text pointer" onClick={onConfirm}>
          확인
        </span>
      </div>
    </div>
  );
}

export default CardNicknameEdit;
