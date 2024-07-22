import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCardInfo } from "../contexts";
import { Card } from "../components";
import { CardInfo } from "../types";

interface CardNicknameEditProps extends Omit<CardInfo, "id" | "nickname"> {
  id?: string;
}

function CardNicknameEdit({
  id,
  cardName,
  cardNumber,
  expiredMonth,
  expiredYear,
  userName,
  color,
}: CardNicknameEditProps) {
  const navigate = useNavigate();
  const { cardInfoList, dispatch } = useCardInfo();
  const currentCardInfo = cardInfoList.find((cardInfo) => cardInfo.id === id)!;
  const [nickname, setNickname] = useState(currentCardInfo?.nickname || "");

  const handleUpdateNickname = () => {
    if (id) {
      if (currentCardInfo.nickname !== nickname) {
        dispatch({ type: "UPDATE_NICKNAME", payload: { id: id!, nickname } });
      }
    } else {
      dispatch({
        type: "ADD",
        payload: {
          cardName,
          cardNumber,
          expiredMonth,
          expiredYear,
          userName,
          color,
          nickname: nickname.length > 0 ? nickname : cardName,
        },
      });
    }

    navigate("/");
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">
          {!id ? "카드등록이 완료되었습니다." : "카드 별칭 수정"}
        </h2>
      </div>
      {currentCardInfo ? (
        <Card type="filled" size="big" {...currentCardInfo} />
      ) : (
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
      )}
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder={!id ? "카드의 별칭을 입력해주세요." : "카드 별칭 (선택)"}
          value={nickname === currentCardInfo?.cardName ? "" : nickname}
          onChange={(e) => setNickname(e.target.value)}
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
        <span className="button-text" onClick={handleUpdateNickname}>
          확인
        </span>
      </div>
    </div>
  );
}

export default CardNicknameEdit;
