import { useState } from "react";
import { useCardForm } from "../hooks";
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
  const [isOpen, setIsOpen] = useState(true);

  const handleCardNameClick = (name: string, color: string) => {
    handleCardNameAndColor(name, color);
    setIsOpen(false);
  };

  return (
    <div className="app">
      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
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
        <Modal.Opener>
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
        </Modal.Opener>
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
        <CardUsernameInput
          username={userName}
          handleUsername={handleUserName}
        />
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

        <Modal.Backdrop />
        <Modal.Positioner>
          <Modal.Content>
            <CardNameList onCardNameClick={handleCardNameClick} />
          </Modal.Content>
        </Modal.Positioner>
      </Modal.Root>
    </div>
  );
};

export default CardInfoEdit;
