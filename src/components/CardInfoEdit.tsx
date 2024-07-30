import { useCardForm, useModal } from "../hooks";
import Button from "./Button";
import Card from "./Card";
import Title from "./Title";
import Icon from "./Icon";
import Modal from "./Modal";
import Input from "./Input";
import CardNumberInput from "./CardNumberInput";
import CardExpiryInput from "./CardExpiryInput";
import CardUsernameInput from "./CardUsernameInput";

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
    cardInfo: {
      cardNumber,
      expiredMonth,
      expiredYear,
      userName,
      cardName,
      color,
      cardSecurityCode,
      cardPassword,
    },
    handleCardNumber,
    handleExpiredMonth,
    handleExpiredYear,
    handleUserName,
    handleCardNameAndColor,
    handleCardSecurityCode,
    handleCardPassword,
    isValidForm,
  } = cardForm;
  const { isOpen, onOpen, onClose } = useModal(true);

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
        <Title level={3} className="page-title">
          카드 추가
        </Title>
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
        onClick={onOpen}
      />
      <CardNumberInput
        cardNumber={cardNumber}
        handleCardNumber={handleCardNumber}
      />
      <CardExpiryInput
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        handleExpiredMonth={handleExpiredMonth}
        handleExpiredYear={handleExpiredYear}
      />
      <CardUsernameInput username={userName} handleUsername={handleUserName} />
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Input
            className="input-basic w-25"
            type="password"
            maxLength={3}
            value={cardSecurityCode}
            onChange={(e) => handleCardSecurityCode(e.target.value)}
          />
          <Icon name="questionCircle" />
        </div>
        <div style={{ height: "10px", paddingTop: "5px" }}></div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <div style={{ display: "flex", gap: "5px" }}>
          <Input
            className="input-basic w-15"
            type="password"
            maxLength={1}
            value={cardPassword[0]}
            onChange={(e) => handleCardPassword(e.target.value, 0)}
          />
          <Input
            className="input-basic w-15"
            type="password"
            maxLength={1}
            value={cardPassword[1]}
            onChange={(e) => handleCardPassword(e.target.value, 1)}
          />
          <div className="flex-center w-15">•</div>
          <div className="flex-center w-15">•</div>
          <div style={{ height: "10px", paddingTop: "5px" }}></div>
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
        <Button
          className="button-text"
          onClick={onNextStep}
          disabled={isValidForm()}
        >
          다음
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex-center" style={{ flexWrap: "wrap", gap: "10px" }}>
          {CARD_NAME_LIST.map(({ name, color }) => (
            <div
              key={name}
              className="modal-item-container pointer"
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
