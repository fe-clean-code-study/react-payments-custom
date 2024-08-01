import { useCardForm, useModal } from "../hooks";
import {
  Card,
  CardExpiryInput,
  CardNameList,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardUsernameInput,
} from "./card";

import { Button, Flex, Icon, Modal, Title } from "./common";

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

  const handleCardNameClick = (name: string, color: string) => {
    handleCardNameAndColor(name, color);
    onClose();
  };

  return (
    <div className="app">
      <Flex align="center" gap="5px">
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
      </Flex>
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
        <CardNameList onCardNameClick={handleCardNameClick} />
      </Modal>
    </div>
  );
};

export default CardInfoEdit;
