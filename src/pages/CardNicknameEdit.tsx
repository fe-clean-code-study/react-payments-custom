import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardInfoContext } from "../context";
import { Card } from "../components";

function CardNicknameEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cardInfoList } = useContext(CardInfoContext);

  const currentCardInfo = cardInfoList.find((cardInfo) => cardInfo.id === id)!;

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">
          {currentCardInfo.nickname.length === 0
            ? "카드등록이 완료되었습니다."
            : "카드 별칭 수정"}
        </h2>
      </div>
      <Card type="filled" size="big" {...currentCardInfo} />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder={
            currentCardInfo.nickname.length === 0
              ? "카드의 별칭을 입력해주세요."
              : "카드 별칭 (선택)"
          }
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
        {/* 이전 주소에 따른 차이 */}
        <span className="button-text" onClick={() => navigate("/")}>
          확인
        </span>
      </div>
    </div>
  );
}

export default CardNicknameEdit;
