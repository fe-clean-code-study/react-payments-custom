import { useCardForm, useModal } from "../hooks";
import { Card, Icon, Modal } from ".";

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

interface CardInfoEditProps {
  cardForm: ReturnType<typeof useCardForm>;
  onNextStep: () => void;
  onNavigateBack: () => void;
}

function CardInfoEdit({
  cardForm,
  onNextStep,
  onNavigateBack,
}: CardInfoEditProps) {
  const {
    cardNumber,
    expiredMonth,
    expiredYear,
    userName,
    cardName,
    color,
    handleCardNumber,
    handleExpiredMonth,
    handleExpiredYear,
    handleUserName,
    handleCardNameAndColor,
  } = cardForm;
  const { isOpen, onOpen, onClose } = useModal();

  return (
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
          onClick={onNavigateBack}
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
            onChange={(e) => handleCardNumber(e.target.value, 0)}
          />
          -
          <input
            className="input-basic"
            type="text"
            maxLength={4}
            value={cardNumber[1]}
            onChange={(e) => handleCardNumber(e.target.value, 1)}
          />
          -
          <input
            className="input-basic"
            type="password"
            maxLength={4}
            value={cardNumber[2]}
            onChange={(e) => handleCardNumber(e.target.value, 2)}
            onFocus={onOpen}
          />
          -
          <input
            className="input-basic"
            type="password"
            maxLength={4}
            value={cardNumber[3]}
            onChange={(e) => handleCardNumber(e.target.value, 3)}
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
            onChange={(e) => handleExpiredMonth(e.target.value)}
          />
          /
          <input
            className="input-basic"
            type="text"
            placeholder="YY"
            maxLength={2}
            value={expiredYear}
            onChange={(e) => handleExpiredYear(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="input-title">카드 소유자 이름</span>
          <span className="input-title">{userName.length}/30</span>
        </div>
        <input
          className="input-basic"
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={30}
          value={userName}
          onChange={(e) => handleUserName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input className="input-basic w-25" type="password" maxLength={3} />
          <Icon name="questionCircle" />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <div style={{ display: "flex", gap: "5px" }}>
          <input className="input-basic w-15" type="password" maxLength={1} />
          <input className="input-basic w-15" type="password" maxLength={1} />
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
          className="button-text pointer"
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "1em",
            margin: 0,
            padding: 0,
          }}
          onClick={onNextStep}
        >
          다음
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex-center" style={{ flexWrap: "wrap", gap: "10px" }}>
          {CARD_NAME_LIST.map(({ name, color }) => (
            <div
              key={name}
              className="modal-item-container"
              onClick={() => {
                handleCardNameAndColor(name, color);
                onClose();
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
  );
}

export default CardInfoEdit;
