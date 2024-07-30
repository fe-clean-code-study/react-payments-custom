import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCardInfo } from "../contexts";
import { CardNicknameEdit } from "../components";

function CardNicknameEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cardInfoList, dispatch } = useCardInfo();
  const currentCardInfo = cardInfoList.find((cardInfo) => cardInfo.id === id)!;
  const [nickname, setNickname] = useState(currentCardInfo.nickname);

  const handleChangeNickname = (value: string) => {
    const trimmedValue = value.trim();

    setNickname(trimmedValue);
  };

  const handleUpdateNickname = () => {
    if (currentCardInfo.nickname !== nickname) {
      dispatch({ type: "UPDATE_NICKNAME", payload: { id: id!, nickname } });
    }

    navigate("/");
  };

  return (
    <CardNicknameEdit
      title="카드 별칭 수정"
      placeholder="카드 별칭 (선택)"
      cardInfo={currentCardInfo}
      nickname={nickname}
      onChangeNickname={handleChangeNickname}
      onConfirm={handleUpdateNickname}
    />
  );
}

export default CardNicknameEditPage;
