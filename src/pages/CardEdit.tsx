import { useNavigate } from "react-router-dom";
import { Card, Icon, Modal } from "../components";
import { useState } from "react";
import { useCardInfo } from "../contexts";

const CARD_NAME_LIST = [
  { name: "찬욱 카드", color: "#E24141" },
  { name: "효리 카드", color: "#547CE4" },
  { name: "수연 카드", color: "#73BC6D" },
  { name: "세진 카드", color: "#DE59B9" },
  { name: "진경 카드", color: "#94DACD" },
  { name: "종길 카드", color: "#E76E9A" },
  { name: "건우 카드", color: "#F37D3B" },
  { name: "혜성 카드", color: "#FBCD58" },
];

function CardEdit() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expiredMonth, setExpiredMonth] = useState("");
  const [expiredYear, setExpiredYear] = useState("");
  const [userName, setUserName] = useState("");
  const [cardName, setCardName] = useState("");
  const [color, setColor] = useState("");
  const [nickname, setNickname] = useState("");
  const { dispatch } = useCardInfo();
  const [step, setStep] = useState<"init" | "nickname">("init");

  const handleInputCardNumber = (value: string, index: number) => {
    const copy = [...cardNumber];

    copy[index] = value;

    setCardNumber(copy);
  };

  const handleNextStep = () => {
    setStep("nickname");
  };

  const handleAddCardInfo = () => {
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

    navigate("/");
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      {step === "init" && (
        <div className="app">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <button
              style={{
                padding: 0,
                height: "24px",
                marginLeft: "-10px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={() => navigate("..")}
            >
              <Icon name="arrowLeft" />
            </button>
            <h3 className="page-title">카드 추가</h3>
          </div>
          <Card
            type="filled"
            size="small"
            cardName={cardName}
            cardNumber={cardNumber}
            userName={userName}
            expiredMonth={expiredMonth}
            expiredYear={expiredYear}
            nickname=""
            color={color}
          />
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <div className="input-box">
              <input
                name="test"
                className="input-basic"
                type="text"
                maxLength={4}
                value={cardNumber[0]}
                onChange={(e) => handleInputCardNumber(e.target.value, 0)}
              />
              -
              <input
                className="input-basic"
                type="text"
                maxLength={4}
                value={cardNumber[1]}
                onChange={(e) => handleInputCardNumber(e.target.value, 1)}
              />
              -
              <input
                className="input-basic"
                type="password"
                maxLength={4}
                value={cardNumber[2]}
                onChange={(e) => handleInputCardNumber(e.target.value, 2)}
                onFocus={() => setModal(true)}
              />
              -
              <input
                className="input-basic"
                type="password"
                maxLength={4}
                value={cardNumber[3]}
                onChange={(e) => handleInputCardNumber(e.target.value, 3)}
              />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              <input
                className="input-basic"
                type="text"
                placeholder="MM"
                maxLength={2}
                value={expiredMonth}
                onChange={(e) => setExpiredMonth(e.target.value)}
              />
              /
              <input
                className="input-basic"
                type="text"
                placeholder="YY"
                maxLength={2}
                value={expiredYear}
                onChange={(e) => setExpiredYear(e.target.value)}
              />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 소유자 이름</span>
            <input
              className="input-basic"
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              maxLength={30}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                className="input-basic w-25"
                type="password"
                maxLength={3}
              />
              <Icon name="questionCircle" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                className="input-basic w-15"
                type="password"
                maxLength={1}
              />
              <input
                className="input-basic w-15"
                type="password"
                maxLength={1}
              />
              <div className="flex-center w-15">•</div>
              <div className="flex-center w-15">•</div>
            </div>
          </div>
          <div
            className="button-box"
            style={{
              position: "absolute",
              bottom: "25px",
              right: "33px",
            }}
          >
            <button
              className="button-text"
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "1em",
                margin: 0,
                padding: 0,
              }}
              onClick={handleNextStep}
            >
              다음
            </button>
          </div>

          <Modal isOpen={modal} onClose={() => setModal(false)}>
            <div
              className="flex-center"
              style={{ flexWrap: "wrap", gap: "10px" }}
            >
              {CARD_NAME_LIST.map(({ name, color }) => (
                <div
                  key={name}
                  className="modal-item-container"
                  onClick={() => {
                    setCardName(name);
                    setColor(color);
                    setModal(false);
                  }}
                >
                  <div
                    className="modal-item-dot"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span className="modal-item-name">{name}</span>
                </div>
              ))}
            </div>
          </Modal>
        </div>
      )}
      {step === "nickname" && (
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
            <span className="button-text" onClick={handleAddCardInfo}>
              확인
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default CardEdit;
