import { CARD_NAME_LIST } from "../constants";
import { useCardForm, useModal } from "../hooks";
import {
  Card,
  CardExpiryInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardUsernameInput,
} from "./card";
import { Button, Icon, Modal, Title } from "./common";

interface CardInfoEditProps {
  cardForm: ReturnType<typeof useCardForm>;
  onNextStep: () => void;
  onNavigateBack: () => void;
}

const CardInfoEdit = ({
  cardForm,
  onNextStep,
  onNavigateBack,
}: CardInfoEditProps) => {
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
      <CardSecurityCodeInput
        cardSecurityCode={cardSecurityCode}
        handleCardSecurityCode={handleCardSecurityCode}
      />
      <CardPasswordInput
        cardPassword={cardPassword}
        handleCardPassword={handleCardPassword}
      />
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
          style={{ cursor: isValidForm() ? "not-allowed" : "pointer" }}
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
};

export default CardInfoEdit;
