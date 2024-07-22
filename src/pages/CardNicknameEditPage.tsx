import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCardInfo } from "../contexts";
import { Card } from "../components";

function CardNicknameEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cardInfoList, dispatch } = useCardInfo();
  const currentCardInfo = cardInfoList.find((cardInfo) => cardInfo.id === id)!;
  const [nickname, setNickname] = useState(currentCardInfo.nickname);

  const handleUpdateNickname = () => {
    if (currentCardInfo.nickname !== nickname) {
      dispatch({ type: "UPDATE_NICKNAME", payload: { id: id!, nickname } });
    }

    navigate("/");
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드 별칭 수정</h2>
      </div>
      <Card type="filled" size="big" {...currentCardInfo} />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드 별칭 (선택)"
          value={nickname === currentCardInfo.cardName ? "" : nickname}
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

export default CardNicknameEditPage;
